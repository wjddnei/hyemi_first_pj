var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'GMoZhUlzBdM', // 최초 재생할 유튜브 영상 ID
    playerVars: { // 자세한 옵션은 플레이어 매개변수 메뉴 확인
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무(아래 플레이스트 옵션 필수)
      playlist: 'GMoZhUlzBdM' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      // 영상이 준비되었을 때
      onReady: function(event){
        event.target.mute(); // 음소거
      }
    }
  });
}