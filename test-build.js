#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting Astro build test...\n');

// Record start time
const startTime = Date.now();

// Clean dist directory first
if (fs.existsSync('dist')) {
  fs.rmSync('dist', { recursive: true, force: true });
  console.log('✓ Cleaned dist directory');
}

// Start build process
const buildProcess = spawn('npm', ['run', 'build'], { 
  stdio: 'pipe',
  shell: true 
});

let buildOutput = '';

buildProcess.stdout.on('data', (data) => {
  const output = data.toString();
  buildOutput += output;
  process.stdout.write(output);
});

buildProcess.stderr.on('data', (data) => {
  const output = data.toString();
  buildOutput += output;
  process.stderr.write(output);
});

buildProcess.on('close', (code) => {
  const endTime = Date.now();
  const buildTime = (endTime - startTime) / 1000;
  
  console.log(`\n--- Build Test Results ---`);
  console.log(`Build time: ${buildTime}s`);
  console.log(`Exit code: ${code}`);
  
  if (code === 0) {
    console.log('✓ Build successful');
    
    // Check dist directory contents
    if (fs.existsSync('dist')) {
      const distFiles = fs.readdirSync('dist', { withFileTypes: true });
      console.log(`\n✓ Generated ${distFiles.length} files/directories in dist/`);
      
      // Check for key files
      const keyFiles = ['index.html', 'blog', 'portfolio', 'rss.xml', '_astro'];
      keyFiles.forEach(file => {
        if (distFiles.some(f => f.name === file)) {
          console.log(`  ✓ ${file} generated`);
        } else {
          console.log(`  ✗ ${file} missing`);
        }
      });
      
      // Check search.json was copied
      if (fs.existsSync('dist/search.json')) {
        console.log('  ✓ search.json copied to dist');
      } else {
        console.log('  ✗ search.json missing in dist');
      }
      
    } else {
      console.log('✗ dist directory was not created');
    }
  } else {
    console.log('✗ Build failed');
  }
  
  // Cleanup
  try {
    fs.unlinkSync(__filename);
  } catch (e) {
    // Ignore cleanup errors
  }
});