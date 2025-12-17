/**
 * @type {[string, string | null, string | null, number][]}
 */
const route100 = [
    [ "Gyuard", null, "07:46", 3 ],
    [ "Kimdown-Charleshouse", "07:55", "07:55", 0 ],
    [ "Moshunover", "07:59", "07:59", 0 ],
    [ "Leafel", "08:02", "08:02", 0 ],
    [ "Mountypile", "08:05", null, 0 ]
];
/**
 * @type {[string, string | null, string | null, number][]}
 */
const route101 = [
    [ "Mountypile", null, "08:16", 0 ],
    [ "Leafel", "08:18", "08:18", 1 ],
    [ "Moshunover", "08:20", "08:21", 1 ],
    [ "Kimdown-Charleshouse", "08:25", "08:25", 1 ],
    [ "Gyuard", "08:34", null, 3 ]
];

/**
 * @type {[string, string | null, string | null, number][]}
 */
let currentRoute = route100;

const clock = document.getElementById("clock");

setInterval(updateTime, 1000);

updateTime();

function updateTime() {
    return clock.innerText = new Date().toLocaleTimeString("hu-HU");
}
