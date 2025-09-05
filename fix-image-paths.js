const fs = require('fs');
const path = require('path');

console.log('Fixing image paths for Astro...\n');

// Create images directory in public
const targetDir = 'public/images/portfolio';
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
  console.log(`Created directory: ${targetDir}`);
}

// Copy all images from portfolio/images to public/images/portfolio
const sourceDir = 'portfolio/images';
if (fs.existsSync(sourceDir)) {
  const files = fs.readdirSync(sourceDir);
  
  files.forEach(file => {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);
    
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`✓ Copied: ${file}`);
    }
  });
  
  console.log(`\nCopied ${files.length} images to ${targetDir}\n`);
}

// Update portfolio markdown files to use correct image paths
const portfolioContentDir = 'src/content/portfolio';
if (fs.existsSync(portfolioContentDir)) {
  const markdownFiles = fs.readdirSync(portfolioContentDir).filter(f => f.endsWith('.md'));
  
  console.log('Updating image paths in portfolio content...');
  
  markdownFiles.forEach(file => {
    const filePath = path.join(portfolioContentDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;
    
    // Update relative image paths in frontmatter and content
    if (content.includes('./images/')) {
      content = content.replace(/\.\/images\//g, '/images/portfolio/');
      updated = true;
    }
    
    if (updated) {
      fs.writeFileSync(filePath, content);
      console.log(`✓ Updated image paths in: ${file}`);
    }
  });
}

console.log('\nImage path fixes complete!');

// Self cleanup
fs.unlinkSync(__filename);