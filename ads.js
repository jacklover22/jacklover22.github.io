var images = [],
        index = 0;
        // just copy and paste that shit and change the funny [number] XDDDDDDDDDDDDD
images[0] = "<a href = 'gaming-channel.html'><img src='ad/ad1.gif'></a>";
images[1] = "<a href = 'ad/ad3.mp4'><img src='ad/Image1.jpg'></a>";
images[2] = "<a href = 'jack-animates-strikes-again.html'><img src='ad/ad2.gif'></a>";
        index = Math.floor(Math.random() * images.length);
        document.write(images[index]);