var stickToolRed = document.querySelector('.stick-tool--red');
var stickTool = document.querySelectorAll('.stick-tool');
var stickToolMenu = document.querySelector('.stick-tool__menu');
var stickToolIcon = document.querySelector('.stick-tool--red .stick-tool__icon');


stickToolRed.onclick = function() {
    for (var i in stickTool)
    {
        if (stickTool[i].style.right == "") 
        {
            stickTool[i].style.right = "calc(282px - (115px - 42px))";
            stickToolMenu.style.width = "282px";
            stickToolMenu.style.right = "0";
            stickToolIcon.innerHTML = 
            `<svg width="32" height="32" viewBox="0 0 32 32" style="fill: #fff;height: 20px;">
                <path d="M 4,15C 4,15.552, 4.448,16, 5,16l 19.586,0 l-4.292,4.292c-0.39,0.39-0.39,1.024,0,1.414 c 0.39,0.39, 1.024,0.39, 1.414,0l 6-6c 0.092-0.092, 0.166-0.202, 0.216-0.324C 27.972,15.26, 28,15.132, 28,15.004c0-0.002,0-0.002,0-0.004 l0,0c0-0.13-0.026-0.26-0.078-0.382c-0.050-0.122-0.124-0.232-0.216-0.324l-6-6c-0.39-0.39-1.024-0.39-1.414,0 c-0.39,0.39-0.39,1.024,0,1.414L 24.586,14L 5,14 C 4.448,14, 4,14.448, 4,15z">
                </path>
            </svg>`; 
        }
        else 
        {
            stickTool[i].style.right = "";
            stickToolMenu.style.width = "0";
            stickToolMenu.style.right = "calc(-29px * 2)";
            stickToolIcon.innerHTML = 
            `<svg x="0px" y="0px" viewBox="0 0 87 87" style="fill: #fff;height: 26px;">
                <path d="M55.4,81.5c6.1-11.1,5.2-16.1-4.3-24.3c6.1-3.5,9.5-8.5,9.1-15.7c-0.5-8.2-7.7-14.7-16.3-14.6
                        c-8.5,0.1-15.6,6.7-15.9,15c-0.3,8.5,5.9,15.8,14.3,16.6c1.4,0.1,2.8,0.2,4.2,0.5c5.9,1.2,10.2,6.7,9.8,12.6
                        c-0.4,6.4-5.5,11.4-11.8,11.7C24.9,84.2,5.9,68.5,3.2,49.3C-0.1,26.9,14.4,6.8,36.4,2.8c22.3-4,43.4,10,48.1,32
                        c4.3,20-8.6,41.2-28.4,46.7C55.9,81.5,55.6,81.5,55.4,81.5z">
                </path>
            </svg>`;
        }
    }
}
