//let deck = "abcdefghiabcdefghi"
let deck=["fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-leaf", "fa fa-bicycle","fa fa-diamond", "fa fa-bomb", "fa fa-paper-plane-o", "fa fa-heart","fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-leaf", "fa fa-bicycle","fa fa-diamond", "fa fa-bomb", "fa fa-paper-plane-o", "fa fa-heart"]

var whohoo = new Audio("./woohoo.mp3")
var wrong = new Audio("./wrong.mp3")
var win = new Audio("./Applause.mp3")

var resetButton
let counter; //to stop the interval
let counter2; //to stop the interval
let secs=0
let turn=0
let pairs=0
let timerbonus=0
let turnbonus=0
let timerRunning=false
var startTime = new Date()
var result = timerbonus + turnbonus
var outcome =""
