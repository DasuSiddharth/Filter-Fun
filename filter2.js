var ogimage=null;
var ggimage= null;
var rgimage= null;
var blimage= null;
var rainimage= null;
var canimg=document.getElementById("sid1");
function upload()
{

var fileinput=document.getElementById("sidfile");
ogimage= new SimpleImage(fileinput);
ogimage.drawTo(canimg);
}

function grayscale()
{
  ggimage= new SimpleImage();
  ggimage=ogimage;
  for (var px of ggimage.values())
    {
      var avg=(px.getRed()+px.getGreen()+px.getBlue())/3;
      px.setRed(avg);
      px.setGreen(avg);
      px.setBlue(avg);
    }
  ggimage.drawTo(canimg);
     
    }


function redscale(){
  rgimage= new SimpleImage();
  rgimage=ogimage;
  for(var px of rgimage.values())
    {
      var avg =(px.getRed()+px.getGreen()+px.getBlue())/3;
      if(avg < 128)
        {
          px.setRed(2*128);
          px.setGreen(0);
          px.setBlue(0);
        }
      else
      {
        px.setRed(255);
        px.setGreen(2*avg-255);
        px.setBlue(2*avg-255);
      }
      
     rgimage.drawTo(canimg);
    }
  
}

function bluescale()
{
  
  blimage=new SimpleImage();
  blimage = ogimage;
  for(var px of blimage.values())
    {
      var r=px.getRed();
      var g=px.getGreen();
      var b=px.getBlue();

      var nb=b+50;
      if(nb>255){
        nb=255;
      }
        
          px.setRed(r);
          px.setGreen(g);
          px.setBlue(nb);
      
    }
      
      
     blimage.drawTo(canimg);
    
}
  


function reset()
{var fileinput=document.getElementById("sidfile");
ogimage= new SimpleImage(fileinput);

  ogimage.drawTo(canimg);
}

function rainbow()
{
  rainimage=new SimpleImage();
  rainimage=Ogimage;
  var width= rainimage.getWidth();
  var  height= rainimage.getHeight();
  var part= rainimage.getHeight()/7;
  
  for(var px of rainimage.values())
    {
      var avg=(px.getRed()+px.getGreen()+px.getBlue())/3;
      
      if(px.getY()<part)
        {
          if(avg < 128)
        {
          px.setRed(2*128);
          px.setGreen(0);
          px.setBlue(0);
        }
      else
      {
        px.setRed(255);
        px.setGreen(2*avg-255);
        px.setBlue(2*avg-255);
      }
      
     rainimage.drawTo(canimg);
        }
  
}
