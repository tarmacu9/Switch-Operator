let operator,input_num1,input_num2;
let num1,num2;
let greeting1,greeting2,greeting3;


function setup() 
{
  createCanvas(400, 400);
  background(178,255,102);

  input_num1=createInput();
  input_num1.position(10,60);
  greeting1=createElement('h5','Enter number 1:');
  greeting1.position(10,20);

  input_num2=createInput();
  input_num2.position(200,60);
  greeting2=createElement('h5','Enter number 2:');
  greeting2.position(200,20);

  operator=createInput();
  operator.position(100,200);
  greeting3=createElement('h5','Enter operator:');
  greeting3.position(100,160);

  textAlign(CENTER);
  textSize(50);
 
}

function draw() {
  num1=input_num1.value();
  num2=input_num2.value();
  var opr=operator.value();

  switch(opr) {
    case '+':
      console.log("addition of num1 and num2:");
      console.log(int(num1)+int(num2));
      break;

    case '-':
        console.log("subtraction of num1 and num2:");
        console.log(int(num1)-int(num2));
        break;

        case '*':
          console.log("multiplication of num1 and num2:");
          console.log(int(num1)*int(num2));
          break;

          case '/':
            console.log("division of num1 and num2:");
            console.log(int(num1)/int(num2));
            break;
            default:
              console.log("Please enter all valid operators");
  }

  
}

