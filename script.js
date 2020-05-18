let doorImages = document.querySelectorAll('.door-frame')
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg"

const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg"

const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg"

const imageList = [botDoorPath,beachDoorPath,spaceDoorPath]

for (let i = 0; i < doorImages.length; i++){
  let anImage = doorImages[i]
  let anImagePic = imageList[i]
  anImage.onclick = () => (
      anImage.src = imageList[i]
      
      )
   
}