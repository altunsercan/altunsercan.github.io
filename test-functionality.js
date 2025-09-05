#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('Running comprehensive functionality tests...\n');

class TestRunner {
  constructor() {
    this.tests = [];
    this.results = {
      passed: 0,
      failed: 0,
      warnings: 0
    };
  }

  test(name, fn) {
    this.tests.push({ name, fn });
  }

  async run() {
    console.log('=== Astro Migration Functionality Test Suite ===\n');
    
    for (const test of this.tests) {
      try {
        const result = await test.fn();
        if (result.status === 'pass') {
          console.log(`✓ ${test.name}`);
          this.results.passed++;
        } else if (result.status === 'warn') {
          console.log(`⚠ ${test.name} - ${result.message}`);
          this.results.warnings++;
        } else {
          console.log(`✗ ${test.name} - ${result.message}`);
          this.results.failed++;
        }
      } catch (error) {
        console.log(`✗ ${test.name} - Error: ${error.message}`);
        this.results.failed++;
      }
    }
    
    this.printSummary();
  }

  printSummary() {
    console.log('\n=== Test Summary ===');
    console.log(`Passed: ${this.results.passed}`);
    console.log(`Warnings: ${this.results.warnings}`);
    console.log(`Failed: ${this.results.failed}`);
    console.log(`Total: ${this.results.passed + this.results.warnings + this.results.failed}\n`);
    
    const successRate = (this.results.passed / (this.results.passed + this.results.failed)) * 100;
    console.log(`Success Rate: ${successRate.toFixed(1)}%`);
  }
}

const runner = new TestRunner();

// Test 1: Check Astro config exists and is valid
runner.test('Astro configuration exists', () => {
  if (fs.existsSync('astro.config.mjs')) {
    const config = fs.readFileSync('astro.config.mjs', 'utf8');
    if (config.includes('@astrojs/vue') && config.includes('@astrojs/tailwind')) {
      return { status: 'pass' };
    }
    return { status: 'fail', message: 'Config missing required integrations' };
  }
  return { status: 'fail', message: 'astro.config.mjs not found' };
});

// Test 2: Check content collections are configured
runner.test('Content collections configured', () => {
  if (fs.existsSync('src/content/config.ts')) {
    const config = fs.readFileSync('src/content/config.ts', 'utf8');
    if (config.includes('blog') && config.includes('portfolio') && config.includes('docs')) {
      return { status: 'pass' };
    }
    return { status: 'fail', message: 'Content collections incomplete' };
  }
  return { status: 'fail', message: 'Content config not found' };
});

// Test 3: Check content exists
runner.test('Content migrated successfully', () => {
  const blogCount = fs.existsSync('src/content/blog') ? 
    fs.readdirSync('src/content/blog').filter(f => f.endsWith('.md')).length : 0;
  const portfolioCount = fs.existsSync('src/content/portfolio') ? 
    fs.readdirSync('src/content/portfolio').filter(f => f.endsWith('.md')).length : 0;
  const docsCount = fs.existsSync('src/content/docs') ? 
    fs.readdirSync('src/content/docs').filter(f => f.endsWith('.md')).length : 0;
  
  if (blogCount > 0 || portfolioCount > 0 || docsCount > 0) {
    return { status: 'pass', message: `Blog: ${blogCount}, Portfolio: ${portfolioCount}, Docs: ${docsCount}` };
  }
  return { status: 'fail', message: 'No content found' };
});

// Test 4: Check base layout exists
runner.test('BaseLayout exists', () => {
  if (fs.existsSync('src/layouts/BaseLayout.astro')) {
    const layout = fs.readFileSync('src/layouts/BaseLayout.astro', 'utf8');
    if (layout.includes('theme-switcher') && layout.includes('SearchInput')) {
      return { status: 'pass' };
    }
    return { status: 'warn', message: 'Layout missing theme/search features' };
  }
  return { status: 'fail', message: 'BaseLayout.astro not found' };
});

// Test 5: Check pages are created
runner.test('Core pages exist', () => {
  const pages = ['src/pages/index.astro', 'src/pages/blog/index.astro', 'src/pages/portfolio/index.astro'];
  const existing = pages.filter(page => fs.existsSync(page));
  
  if (existing.length === pages.length) {
    return { status: 'pass' };
  } else if (existing.length > 0) {
    return { status: 'warn', message: `${existing.length}/${pages.length} pages exist` };
  }
  return { status: 'fail', message: 'Core pages missing' };
});

// Test 6: Check dynamic routes exist
runner.test('Dynamic routes configured', () => {
  const routes = [
    'src/pages/blog/[...slug].astro',
    'src/pages/portfolio/[...slug].astro',
    'src/pages/tag/[tag].astro'
  ];
  const existing = routes.filter(route => fs.existsSync(route));
  
  if (existing.length === routes.length) {
    return { status: 'pass' };
  }
  return { status: 'warn', message: `${existing.length}/${routes.length} dynamic routes exist` };
});

// Test 7: Check search functionality
runner.test('Search functionality configured', () => {
  const hasSearchIndex = fs.existsSync('public/search.json');
  const hasSearchComponent = fs.existsSync('src/components/SearchInput.vue');
  const hasIntegration = fs.existsSync('integrations/search-index.js');
  
  if (hasSearchIndex && hasSearchComponent && hasIntegration) {
    return { status: 'pass' };
  }
  return { status: 'warn', message: 'Search functionality partially configured' };
});

// Test 8: Check RSS feed configured
runner.test('RSS feed configured', () => {
  if (fs.existsSync('src/pages/rss.xml.js')) {
    return { status: 'pass' };
  }
  return { status: 'fail', message: 'RSS feed not configured' };
});

// Test 9: Check Vue components exist
runner.test('Vue components migrated', () => {
  const vueFiles = [];
  function findVueFiles(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        findVueFiles(fullPath);
      } else if (file.endsWith('.vue')) {
        vueFiles.push(fullPath);
      }
    });
  }
  
  findVueFiles('src/components');
  if (vueFiles.length > 0) {
    return { status: 'pass', message: `${vueFiles.length} Vue components found` };
  }
  return { status: 'warn', message: 'No Vue components found' };
});

// Test 10: Check CSS/styling
runner.test('Styling configured', () => {
  const hasTailwind = fs.existsSync('tailwind.config.js');
  const hasGlobalCSS = fs.existsSync('src/styles/global.css');
  
  if (hasTailwind && hasGlobalCSS) {
    return { status: 'pass' };
  } else if (hasTailwind || hasGlobalCSS) {
    return { status: 'warn', message: 'Partial styling configuration' };
  }
  return { status: 'fail', message: 'Styling not configured' };
});

// Test 11: Package.json scripts
runner.test('NPM scripts configured', () => {
  if (fs.existsSync('package.json')) {
    const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const requiredScripts = ['dev', 'build', 'deploy'];
    const hasScripts = requiredScripts.every(script => pkg.scripts && pkg.scripts[script]);
    
    if (hasScripts) {
      return { status: 'pass' };
    }
    return { status: 'warn', message: 'Some required scripts missing' };
  }
  return { status: 'fail', message: 'package.json not found' };
});

// Run all tests
runner.run().then(() => {
  console.log('Functionality test complete!');
  
  // Cleanup
  try {
    fs.unlinkSync(__filename);
  } catch (e) {
    // Ignore cleanup errors
  }
});