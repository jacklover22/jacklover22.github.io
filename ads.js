var images = [],
            index = 0;
            // just copy and paste that shit and change the funny [number] XDDDDDDDDDDDDD
            images[0] = "<a href = 'gaming-channel.html'><img src='https://cdn.discordapp.com/attachments/682666136654970902/1006215421327851632/ad1.gif'></a>";
            images[1] = "<a href = 'https://cdn.discordapp.com/attachments/682666136654970902/1006223101673082981/WEHAVETHEMEAT.mp4'><img src='https://cdn.discordapp.com/attachments/682666136654970902/1006222484502224907/Image1.jpg'></a>";
            images[2] = "<a href = 'jack-animates-strikes-again.html'><img src='https://cdn.discordapp.com/attachments/682666136654970902/1007571197887774740/ad2.gif'></a>";
            index = Math.floor(Math.random() * images.length);
            document.write(images[index]);