/*
Code Challenge #3
Scenario
Create an images object that will be used to store the images. The object should have a list property, which will be an array of image objects and methods:

contains - which takes as its argument the title of the image and returns true if the image is already placed in the list (otherwise it returns false)
add – which takes three arguments (title, artist, and date) and creates a new object based on them and adds it to the list (if it has not already been added)
show - which displays all images on the list;
clear – which removes all objects from the list.
*/

// Define the Image constructor
let Image = function(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}

// Create the images object with list property and methods
let images = {
    list: [],
    contains: function(title) {
        let retVal = false;
        for (let image of this.list) {
            if (image.title === title) {
                retVal = true;
                break;
            }
        }
        return retVal;
    },
    add: function(title, artist, date) {
        if (!this.contains(title)) {
            this.list.push(new Image(title, artist, date));
        }
    },
    show: function() {
        this.list.forEach(image => console.log(`${image.title} (${image.artist}, ${image.date})`));
    },
    clear: function() {
        this.list = [];
    }
}

// Test the script
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.add('Mona Lisa', 'Leonardo da Vinci', 1503); // This should not add a duplicate

console.log(images.contains('The Scream')); // Should return false
console.log(images.contains('Mona Lisa')); // Should return true

images.show(); // Display all images in the list

images.clear(); // Clear the list
images.show(); // Show should display nothing as the list is cleared