* Spec: The program will only accept a number in the form
	expected input: “hello”
	expected output: “please enter a number”
* Spec: The program will return a range of numbers from 0 to the users inputted number
	expected input: “4”
	expected output: “0,1,2,3,4”
* Spec: the program will replace any number containing a “1” with “Beep!”
	expected input: “4”
	expected output: “0, Beep!, 2, 3, 4”
* Spec: The program will replace any number containing a “2” with “Boop!”
	expected input: “4”
	expected output: “0, Beep!, Boop!, 3, 4”
* Spec: The program will replace any number containing a “3” with “Won’t you be my neighbor?”
	expected input: “4”
	expected output: “0, Beep!, Boop!, Won’t you be my neighbor?, 4”
* Spec: The program will replace any number containing a “1” and a “2” but not a “3” with 	“Boop!”
	expected input: “12”
	expected output: “0, Beep!, Boop!, 3, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!”
* Spec: The program will replace any number containing a “1” and a “3” but not a “2” with “Won’t you be my neighbor?”
	expected input: “13”
	expected output: “0, Beep!, Boop!, 3, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won’t you be my neighbor?”
