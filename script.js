const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  // Check if the key exists in sampleObject
  if (sampleObject.hasOwnProperty(key)) {
	  if (sampleObject=="red" ||sampleObject=="white") {
	  	return true;
	  }
    
  } else {
    return false;
  }
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));