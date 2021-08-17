# Robot Simulator

## Summary
This assignment asks you to design and build a “Robot Simulator”. Please use NodeJS as you are applying for a NodeJS backend role. 
Please complete the assignment by submitting your solution to a github / bitbucket account of your choice. Please let us know when you are ready so that you can review; based on the result we’ll invite you to a further discussion. We think you can finish the assignment in a week, but please do let us know if you need more time. 	

## Background
In this assignment you will simulate a robot moving on a square table. The table is 5 units x 5 units in size. There are no obstructions on the table surface. The robot is free to roam around the surface of the table, but must be prevented from falling. 

## Task
Create an application that can read in commands of the following form:
1. PLACE X,Y,F
2. MOVE
3. LEFT
4. RIGHT
5. REPORT

- PLACE will put the robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST. The origin (0,0) can be considered to be the SOUTH WEST most corner.

- The first valid command to the robot is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command. The application should discard all commands in the sequence until a valid PLACE command has been executed.

- MOVE will move the robot one unit forward in the direction it is currently facing.

- LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot.

- REPORT will announce the X,Y and orientation of the robot.

- A robot that is not on the table can choose to ignore the MOVE, LEFT, RIGHT and REPORT commands.

- Please provide test data to exercise the application.

## Constraints
The robot must not fall off the table during movement. This also includes the initial placement of the robot. Any movement that would result in the robot falling from the table must be prevented. 

## Bonus points
- For bonus points, implement a way for the robot to handle the case when commands are issued, but the robot is offline for 5 seconds.

- For super bonus points, implement a way for the robot to handle more than one command issuer.

## Example Input and Output
Example 1 :
```cmd 
 PLACE 0,0,NORTH 
 ```
```cmd
 MOVE 
 ```
```
REPORT
```
**Output: 0,1,NORTH** 

Example 2 :

```cmd
PLACE 0,0,NORTH
```
```cmd
LEFT
```
```cmd
REPORT
```
**Output: 0,0,WEST**

Example 3 :
```cmd
PLACE 0,0,NORTH|MOVE|MOVE|MOVE|RIGHT|MOVE|MOVE|MOVE|REPORT
```
**Output: 3,3,EAST**

## Non-functional requirements
- Create a well-structured code which focuses on solving the problem. Code quality matters. Please show us what code quality means to you. The more of that you do, the more you’ll be able to own our services.

- Think of the future – what happens with the code in 1 year? What if there are new requirements?
Usage of cloud infrastructure components is appreciated – such as AWS Lambda.

