class Media {
    title: string;
    constructor(title: string) {
        this.title = title;
    }


    printDetails() {
        console.log(`${this.title}`);
    }
}


class Book extends Media {
    author: string;
    constructor(title: string, author: string) {
        super(title);
        this.author = author;
    }

    
    printDetails() {
        console.log(`Book ${this.title} written by ${this.author}`);
    }
}


class Movie extends Media {
    director: string;
    constructor(title: string, director: string) {
        super(title);
        this.director = director;
    }

    printDetails() {
        console.log(`Movie ${this.title} directed by ${this.director}`);
    }
}

class MusicAlbum extends Media {
    artist: string;
    constructor(title: string, artist: string) {
        super(title);
        this.artist = artist;
    }

    printDetails() {
        console.log(`Song ${this.title} by ${this.artist}`);
    }
}


function displayMediaDetails(media: Media) {
    if (media instanceof Book) {
        media.printDetails();  // Safe to call Book's printDetails
    } else if (media instanceof Movie) {
        media.printDetails();  // Safe to call Movie's printDetails
    } else if (media instanceof MusicAlbum) {
        media.printDetails();  // Safe to call MusicAlbum's printDetails
    } else {
        console.log("Unknown media type");
    }

}


const bedeMeyJosna = new Movie('Beder Meye Josna', 'Kudus Boyati');

displayMediaDetails(bedeMeyJosna);