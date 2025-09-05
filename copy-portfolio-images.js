const fs = require('fs');
const path = require('path');

// Create images directory in content/portfolio
const targetDir = 'src/content/portfolio/images';
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Copy all images from portfolio/images to src/content/portfolio/images
const sourceDir = 'portfolio/images';
if (fs.existsSync(sourceDir)) {
  const files = fs.readdirSync(sourceDir);
  
  files.forEach(file => {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);
    
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`Copied: ${file}`);
  });
  
  console.log(`\nCopied ${files.length} images to ${targetDir}`);
} else {
  console.log('Source images directory not found');
}

// Self cleanup
fs.unlinkSync(__filename);