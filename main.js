
//import * as THREE from 'three'
//import { NeverStencilFunc } from 'three';
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
//import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
//import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
//import { GLTFLoader } from "./GLTFLoader.js";

/*
const scene = new THREE.Scene();
console.log('test');
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'), alpha:true
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(-40);
camera.position.setX(-3);
camera.position.setY(-3);

scene.background = new THREE.Color(0xc4a7e7);





//console.log("test2132131");

/*
let obj;
const loader = new GLTFLoader()
loader.load('scene.gltf', function (gltf) {
        obj = gltf.scene;
        scene.add(gltf.scene)
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)
*/



/*

var light1 = new THREE.AmbientLight(0xffffff);
scene.add(light1);
scene.background = new THREE.Color(0xc4a7e7)


//const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({color: 0x5889a7, wireframe: true});
const material1 = new THREE.MeshBasicMaterial({color: 0xaa7cc5, wireframe: true});
//const torus = new THREE.Mesh(geometry, material);
//scene.add(torus);

const geometry1 = new THREE.ConeGeometry( 1.62, 2.1, 8 );






let particle = new THREE.Object3D();
scene.add(particle);

for (var i = 0; i < 400; i++) 
{
    if (i%3==0)
    {
        var mesh = new THREE.Mesh(geometry1, material1);
    }
    else
    {
        var mesh = new THREE.Mesh(geometry1, material);
    }
    mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
    mesh.position.multiplyScalar(90 + (Math.random() * 350));
    mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
    
    particle.add(mesh);
}




const controls = new OrbitControls(camera, renderer.domElement);
controls.enablePan = false;
controls.minDistance = 15;
controls.maxDistance = 50;



let t = true;
function animate(){
    console.log(t);
    requestAnimationFrame(animate);


    particle.rotation.x += 0.002;
    //particle.rotation.y -= 0.0040;
    
    if (camera.position.z <= 50 && t == true)
    {
        if (camera.position.z > 49)
        {
            t = false;
            console.log(t)
        }
        camera.position.z += 0.1;
        //console.log("camera position" + camera.position.z)
    }
    if (camera.position.z >= -50 && t == false)
    {
        if (camera.position.z < -49)
        {
            t = true;
        }
        camera.position.z -= 0.1;
        //console.log("camera position" + camera.position.z)
    }
    
    controls.update();
    renderer.render(scene, camera);
}


animate();






*/
window.addEventListener('keydown', (event) => {
    if (event.keyCode == 13){
        console.log("hello");
        getResponse();
    }
})
//procedurally generated environmenment from https://codepen.io/marctannous/pen/RNGjmz
var renderer	= new THREE.WebGLRenderer({
    antialias	: true
});
/* Fullscreen */
renderer.setSize( window.innerWidth, window.innerHeight );
/* Append to HTML */
document.body.appendChild( renderer.domElement );
var onRenderFcts= [];
var scene	= new THREE.Scene();
var camera	= new THREE.PerspectiveCamera(25, window.innerWidth /    window.innerHeight, 0.01, 1000);
/* Play around with camera positioning */
camera.position.z = 15; 
camera.position.y = 2;
/* Fog provides depth to the landscape*/
scene.fog = new THREE.Fog(0x000, 0, 45);
;(function(){
    var light	= new THREE.AmbientLight( 0x202020 )
    scene.add( light )
    var light	= new THREE.DirectionalLight('white', 5)
    light.position.set(0.5, 0.0, 2)
    scene.add( light )
    var light	= new THREE.DirectionalLight('white', 0.75*2)
    light.position.set(-0.5, -0.5, -2)
    scene.add( light )		
})()
var heightMap	= THREEx.Terrain.allocateHeightMap(256,256)
THREEx.Terrain.simplexHeightMap(heightMap)	
var geometry	= THREEx.Terrain.heightMapToPlaneGeometry(heightMap)
THREEx.Terrain.heightMapToVertexColor(heightMap, geometry)
/* Wireframe built-in color is white, no need to change that */
var material	= new THREE.MeshBasicMaterial({color: 0xc4a7e7,
    wireframe: true
});
var mesh	= new THREE.Mesh( geometry, material );
scene.add( mesh );
mesh.lookAt(new THREE.Vector3(0,1,0));
/* Play around with the scaling */
mesh.scale.y	= 3.5;
mesh.scale.x	= 3;
mesh.scale.z	= 0.20;
mesh.scale.multiplyScalar(10);
/* Play around with the camera */
onRenderFcts.push(function(delta, now){
    mesh.rotation.z += 0.2 * delta;	
})
onRenderFcts.push(function(){
    renderer.render( scene, camera );		
})
var lastTimeMsec= null
requestAnimationFrame(function animate(nowMsec){
    requestAnimationFrame( animate );
    lastTimeMsec	= lastTimeMsec || nowMsec-1000/60
    var deltaMsec	= Math.min(200, nowMsec - lastTimeMsec)
    lastTimeMsec	= nowMsec
    onRenderFcts.forEach(function(onRenderFct){
        onRenderFct(deltaMsec/1000, nowMsec/1000)
    })
})



// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    console.log("first msg");
    let firstMessage = "Ask me a question :)"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();
    //let userText = document.getElementById("textInput");


    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    //document.getElementById("textInput").innerHTML = "";
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Heart clicked!")
}
console.log("testlteows");
// Press enter to send a message
$("#textInput").keypress(function (e) {
    console.log("taking enter key input");
    if (e.which == 13) {
        getResponse();
    }
});

function getBotResponse(input) {
    //rock paper scissors
    if (input == "How does this website work?") {
        return "This website has the goal of connecting sufferers of depression with doctors and others like themselves. Check out the listed resources or chatroom if you want.";
    } 
    if (input == "How can this website help me?") {
        return "This website offers solid resources for patients, and an anonymous chatroom where you can speak of your problems freely, and seek help at the same time from other patients and even professionals.";
    } 
    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else! Ex. How does this website work? or How can this website help me?";
    }
}