/*
Code Challenge #4
Scenario
Complement the images object from the previous task with two new methods (without rewriting the whole object):

edit - which takes three arguments (title, artist, and date) and if it finds an image with the given title in the list, it changes its artist and date properties;
delete - which takes the title argument and if it finds a picture with this title in the list, it deletes it (to delete a list element, use the splice method)
Additionally, add a show method to the Image constructor, which will display information about this one image. Do not rewrite the constructor. Use prototypes for this purpose. Then modify the show method of the images object so that it uses the newly created single image show method to display the information.
*/

// Define the Image constructor
function Image(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}

// Add the show method to the Image constructor using prototypes
Image.prototype.show = function() {
    console.log(`${this.title} (${this.artist}, ${this.date})`);
}

// Create the images object
let images = {
    list: [],
    contains: function(title) {
        return this.list.some(image => image.title === title);
    },
    add: function(title, artist, date) {
        if (!this.contains(title)) {
            this.list.push(new Image(title, artist, date));
        }
    },
    show: function() {
        this.list.forEach(image => image.show());
    },
    edit: function(title, artist, date) {
        let image = this.list.find(image => image.title === title);
        if (image) {
            image.artist = artist;
            image.date = date;
        }
    },
    delete: function(title) {
        let index = this.list.findIndex(image => image.title === title);
        if (index !== -1) {
            this.list.splice(index, 1);
        }
    }
};

// Test the script
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);

images.show(); // Display all images in the list

images.edit('Mona Lisa', 'Leonardo', 1504); // Edit an existing image
images.show(); // Display all images in the list after edit

images.delete('The Last Supper'); // Delete an image
images.show(); // Display all images in the list after delete