let doorImages = document.querySelectorAll('.door-frame')
let numClosedDoors = doorImages.length;
let openDoorA, openDoorB, openDoorC;

const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg"

const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg"

const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg"

randomChoreDoorGenerator = ()=>{
    const numClosedDoors = 3;
    const choreDoor = Math.floor(Math.random() * numClosedDoors);

    if(choreDoor === 0) {
    openDoorA = botDoorPath;
    openDoorB = beachDoorPath;
    openDoorC = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoorB = botDoorPath;
    openDoorC = beachDoorPath;
    openDoorA = spaceDoorPath;
  } else if (choreDoor === 2) {
    openDoorC = botDoorPath;
    openDoorA = beachDoorPath;
    openDoorB = spaceDoorPath;
  } 
  console.log(choreDoor)
	const imageList = [openDoorA,openDoorB,openDoorC]

	for (let i = 0; i < doorImages.length; i++){
	  let anImage = doorImages[i]
	  let anImagePic = imageList[i]
	  anImage.onclick = () => (
	      anImage.src = imageList[i]
	      )
	   
	}
}


randomChoreDoorGenerator()