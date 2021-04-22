export interface Ishapes {
    draw():number
}

class Rectangle implements Ishapes{

    draw():any{
        var c : any = document.getElementById("myCanvas") ;
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.rect(20, 20, 150, 100);
        ctx.stroke();
    }

}

class Circle implements Ishapes{
    draw():any{
        var c : any = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(100, 75, 50, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

class Square implements Ishapes{
    draw():any{
        var c : any = document.getElementById("myCanvas") ;
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.rect(20, 20, 100, 100);
        ctx.stroke();
    }

}