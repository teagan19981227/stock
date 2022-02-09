//selector
//player
let audio = document.querySelector(".player .audio")
let play = document.querySelector(".fa-play")
let timeTotal = document.querySelector(".player .time__total")
let timeCurrent = document.querySelector(".player .time__current")
let timeBarTotal = document.querySelector(" .player .time__bar-total")
let timeBarCurrent = document.querySelector(".player .time__bar-current")
let stepForward = document.querySelector(".player .controls__step-forward")
let stepBackward = document.querySelector(".player .controls__step-backward")
let repeat = document.querySelector(".player .controls__repeat")
let random = document.querySelector(".player .controls__random")
let albumCover = document.querySelector(".player .album__cover")
let songName = document.querySelector(".player .song__name")
let songSinger = document.querySelector(".player .song__singer")
let bg = document.querySelector('.bg')
    //playlist
let menuBtnIcon = document.querySelector('.fa-bars')
let playList = document.querySelector('.play__list')
let playListItems = document.querySelectorAll('.play__list-items')
let albumCoverList = document.querySelectorAll(".play__list .album__cover")
let songNameList = document.querySelectorAll(".play__list .song__name")
let songSingerList = document.querySelectorAll(".play__list .song__singer")
let timeTotalList = document.querySelectorAll(".play__list .time__total")
let audioList = document.querySelectorAll(".play__list .audio")

//controllers
let playing = false
let isListOpen = false
let isLoop = false
let songIndex = 1;
let isRandom = false
let time = 0

//playlist of song
const songList = [{
    "id": 1,
    "songName": `真夜中のドア`,
    "songSinger": `松原みき`
}, {
    "id": 2,
    "songName": `Plastic Love`,
    "songSinger": `竹内まりや`
}, {
    "id": 3,
    "songName": `DEEP INSIDE`,
    "songSinger": `paris match`
}, {
    "id": 4,
    "songName": `Good Bye Boogie Dance`,
    "songSinger": `Anri`
}, {
    "id": 5,
    "songName": `Candy`,
    "songSinger": `具島直子`
}, {
    "id": 6,
    "songName": `Street Dancer`,
    "songSinger": `岩崎宏美`
}, {
    "id": 7,
    "songName": `Telephone Number`,
    "songSinger": `大橋純子`
}, {
    "id": 8,
    "songName": `4:00 AM`,
    "songSinger": `大貫妙子`
}]


let showTimeTotal = function() {
    let min = parseInt(audio.duration / 60)
    let sec = parseInt(audio.duration % 60)
    if (min < 10) {
        min = `0${min}`
    }
    if (sec < 10) {
        sec = `0${sec}`
    }
    timeTotal.innerHTML = `${min}:${sec}`
}



let togglePlay = function() {
    if (!playing) {
        audio.play();
        play.classList.remove("fa-play")
        play.classList.add("fa-pause")
        playing = true
    } else {
        audio.pause();
        play.classList.add("fa-play")
        play.classList.remove("fa-pause")
        playing = false
    }
}


let timeBarChange = function() {
    setInterval(function() {
        timeBarCurrent.style.width = `${(audio.currentTime / audio.duration) * 100}%`
    }, 0.01)

    setInterval(function() {
        let min = parseInt(audio.currentTime / 60)
        let sec = parseInt(audio.currentTime % 60)
        if (min < 10) {
            min = `0${min}`
        }
        if (sec < 10) {
            sec = `0${sec}`
        }
        timeCurrent.innerHTML = `${min}:${sec}`
    }, 0.01)

}



let clickTimeBar = function(event) {
    if (!playing) {
        audio.play();
        play.classList.remove("fa-play")
        play.classList.add("fa-pause")
        playing = true
    }

    let currentScreenWidth = document.body.clientWidth

    285
    console.log(event.pageX)
    console.log(currentScreenWidth)
    console.log(timeBarTotal.offsetWidth)
    if (currentScreenWidth <= 678) {

        currentScreenWidth = currentScreenWidth / 2 - ((timeBarTotal.offsetWidth) / 2)
        audio.currentTime = `${(event.pageX-currentScreenWidth) / 2.85/100*audio.duration}`

    } else {
        if (!isListOpen) {
            currentScreenWidth = currentScreenWidth / 2 - ((timeBarTotal.offsetWidth) / 2)
            audio.currentTime = `${(event.pageX-currentScreenWidth) / 6.08/100*audio.duration}`
        } else {
            currentScreenWidth = currentScreenWidth / 2 - ((timeBarTotal.offsetWidth) / 2)
            audio.currentTime = `${(event.pageX-currentScreenWidth-234) / 6.08/100*audio.duration}`
        }
    }


}


let playListOpen = function() {

    if (!isListOpen) {
        menuBtnIcon.classList.remove("fa-bars")
        menuBtnIcon.classList.add("fa-times")
        playList.classList.add("list-open")
        playList.classList.remove("list-close")
        isListOpen = true
    } else {
        menuBtnIcon.classList.add("fa-bars")
        menuBtnIcon.classList.remove("fa-times")
        playList.classList.remove("list-open")
        playList.classList.add("list-close")
        isListOpen = false
    }
}


let songLoop = function() {
    if (!isLoop) {
        audio.setAttribute('loop', "")
        repeat.classList.add("loop-open")
        isLoop = true
    } else {
        audio.removeAttribute('loop', "")
        repeat.classList.remove("loop-open")
        isLoop = false
    }

}

let clearRepeat = function() {
    isLoop = false
    audio.removeAttribute("loop", "")
    repeat.classList.remove("loop-open")
}

for (let i = 0; i < albumCoverList.length; i++) {
    songNameList[i].innerHTML = songList[i].songName
    songSingerList[i].innerHTML = songList[i].songSinger
    albumCoverList[i].style.background = `url('./album-cover/0${i+1}.jpg')`
    albumCoverList[i].style.backgroundRepeat = `no-repeat`
    albumCoverList[i].style.backgroundPosition = `center center`
    albumCoverList[i].style.backgroundSize = `cover`
    audioList[i].setAttribute('src', `./song/0${i+1}.mp3`)


    let audioListTime = function() {
        let min = parseInt(audioList[i].duration / 60)
        let sec = parseInt(audioList[i].duration % 60)
        if (min < 10) {
            min = `0${min}`
        }
        if (sec < 10) {
            sec = `0${sec}`
        }
        timeTotalList[i].innerHTML = `${min}:${sec}`
    }

    let clickPlayListChangeSong = function() {
        albumCover.style.background = `url('./album-cover/0${i+1}.jpg')`
        albumCover.style.backgroundRepeat = `no-repeat`
        albumCover.style.backgroundPosition = `center center`
        albumCover.style.backgroundSize = `cover`
        songName.innerHTML = songList[i].songName
        songSinger.innerHTML = songList[i].songSinger
        bg.style.background = `url('./album-cover/0${i+1}.jpg')`
        audio.setAttribute('src', `./song/0${i+1}.mp3`)
        audio.play()
        playing = true
        play.classList.remove("fa-play")
        play.classList.add("fa-pause")
        timeTotal.innerHTML = timeTotalList[i].innerHTML
    }

    playListItems[i].addEventListener('click', clickPlayListChangeSong)
    audioList[i].addEventListener('loadedmetadata', audioListTime, false);
    playListItems[i].addEventListener('click', clearRepeat)
}

let getRandom = function(min, max) {
    let random = Math.floor(Math.random() * max) + min;
    return random
}


let randomSong = function() {
    if (isRandom) {
        let randomNum = getRandom(1, 8)
        let secondRandomNum = getRandom(0, 6)
        if (songIndex == randomNum) {
            let indexArr = [1, 2, 3, 4, 5, 6, 7, 8]
            let deleteIndex = indexArr.splice(songIndex - 1, 1)
            randomNum = indexArr[secondRandomNum]
            songIndex = randomNum
            indexArr.push(deleteIndex)
            indexArr.sort()
        } else {
            songIndex = randomNum
        }
        changeSong(songIndex)
    }

}

let forward = function() {
    if (isRandom) {
        randomSong();
    } else {
        if (songIndex == 8) {
            songIndex = 1;
        } else {
            songIndex = songIndex + 1;
        }
        changeSong(songIndex)
    }
}

let backward = function() {
    if (isRandom) {
        randomSong();
    } else {
        if (songIndex == 1) {
            songIndex = 8;
        } else {
            songIndex = songIndex - 1;
        }
        changeSong(songIndex)
    }
}



let changeSong = function(index) {
    audio.setAttribute("src", `./song/0${index}.mp3`)
    audio.play()
    playing = true
    play.classList.remove("fa-play")
    play.classList.add("fa-pause")
    songName.innerHTML = songList[index - 1].songName
    songSinger.innerHTML = songList[index - 1].songSinger
    albumCover.style.background = `url('./album-cover/0${index}.jpg')`
    albumCover.style.backgroundRepeat = `no-repeat`
    albumCover.style.backgroundPosition = `center center`
    albumCover.style.backgroundSize = `cover`
    bg.style.background = `url('./album-cover/0${index}.jpg')`
    timeTotal.innerHTML = timeTotalList[index - 1].innerHTML
}

let randStyle = function() {
    if (!isRandom) {
        isRandom = true
        random.classList.add("random-open")

    } else {
        isRandom = false
        random.classList.remove("random-open")
    }
}

play.addEventListener('click', togglePlay)
audio.addEventListener('play', timeBarChange)
play.addEventListener('click', showTimeTotal)
timeBarTotal.addEventListener('click', clickTimeBar)
menuBtnIcon.addEventListener('click', playListOpen)
stepForward.addEventListener('click', forward)
stepBackward.addEventListener('click', backward)
repeat.addEventListener('click', songLoop)
stepForward.addEventListener('click', clearRepeat)
stepBackward.addEventListener('click', clearRepeat)
audio.addEventListener('ended', forward)
audio.addEventListener('ended', randomSong)
random.addEventListener('click', randStyle)