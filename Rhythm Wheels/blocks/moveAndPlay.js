(function () {
    return function (X, Y, startAngle) {
        var heading = startAngle+((window.audioContext.currentTime-startTime)*360)/(this.eighthNoteTime()*32);
        var sound = this.costume.name;
        
        if (heading<0) // if the start timer has been reset
        {
            startAngle = angle%360;
            var heading = startAngle+((window.audioContext.currentTime-startTime)*360)/(this.eighthNoteTime()*32);
        }
        
		this.gotoXY(X,Y);
        this.setHeading(heading)
        this.forward(30);
        
        if(heading >= 360 ) //if you have made it to the start position
        {
          this.playSoundTime(sound, 0);
          startAngle -= 360;
        }
        return startAngle;
	};
}());


//# sourceURL=moveAndPlay.js