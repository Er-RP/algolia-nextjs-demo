#### Script to created Category index

```
function convertToNestedStructure(input) {
    const result = {};
  
    input.forEach((item) => {
      const categories = item.hierarchicalCategories;
  
      let currentLevel = result;
  
      Object.keys(categories).forEach((key) => {
        const categoryName = categories[key];
  
        if (!currentLevel[categoryName]) {
          const splitStrings = categoryName.split('>').map(str => str.trim());

const lastString = splitStrings[splitStrings.length - 1];
          currentLevel[categoryName] = { name: lastString, children: {},lvl:`hierarchicalCategories.${key}`};
        }
  
        currentLevel = currentLevel[categoryName].children;
      });
    });
  
    return formatOutput(result);
  }
  
  function formatOutput(obj) {
    const output = { name: "", children: []};
  
    for (const key in obj) {
      const child = obj[key];
      child.children = formatOutput(child.children);
      output.children.push(child);
    }
  
    return output.children.length ? output.children : null;
  }
  
  // Example usage:
  const inputObjects = [
    // ... your input objects
  ];
  
  const result = convertToNestedStructure(json);
```