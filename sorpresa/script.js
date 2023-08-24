var message = document.getElementById('message');
var fondo = document.getElementById('fondo');
var rc = document.getElementById('rotateChars')
      var text = rc.innerText.trim()
      var len = text.length
      var grp = len / 2
      var html = ""
      while (len > -1) {
          var txt = text.charAt(len)
          html = `<span style="animation-delay:${len / grp}s" class="indChar ${txt.trim() === "" ? "" : "d-inline-block"} ">${txt}</span>${html}`
          len--
      }
      rc.innerHTML = html
      
      var audioEnabled = false
      var wik = document.getElementById('wik')
      var navLinks = document.getElementsByClassName('nav-link')
      for (var n of navLinks) {
          n.addEventListener('mouseover', function () { if (audioEnabled) { wik.currentTime = 0; wik.play() } })
      }
      
      var enableMusic = window.addEventListener('click', function () {
          var myAudio = document.getElementById('myAudio')
          myAudio.volume = 0.5;
          myAudio.play()
          audioEnabled = true
          document.getElementById('mouse').style.animationPlayState = "paused"
          removeEventListener('click', enableMusic)
          //
          message.classList.remove('d-none');
          fondo.classList.remove('d-none');
      })
var msg = document.getElementsByClassName('msg');
const msgs = Array.from(msg);
      var heart = document.getElementById('heart');
      heart.onclick = function(){
        document.getElementById('intro').classList.add('d-none');
        heart.classList.add('d-none');
        msgs.forEach(element => {
           element.classList.add('m1'); 
           element.classList.remove('d-none'); 
        });
      }