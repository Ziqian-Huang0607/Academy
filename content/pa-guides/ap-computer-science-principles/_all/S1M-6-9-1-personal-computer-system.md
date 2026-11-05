# S1M-6 9.1 Personal Computer System

> From the Grade 10 Resource Department's Semester 1 Midterm Computer Science AP review guide (PA). Writers: Summer Liang 10-4, Forrest Yan 10-8. Editor: Caitlin Zhou 10-2, Rick Yu 10-12. Range: ALL. Student-made reference material: where it differs from class, follow class.

Terms to remember:

System unit: The main enclosure of a computer, containing components such as the motherboard, processor, memory, power supply and internal storage devices.

Keyboard: Primary input device

Mouse: A pointing device used to move the pointer and select/interact with items in a graphical user interface (GUI).

Disk: A circular storage medium that holds data magnetically or optically. Examples include the magnetic disks inside a hard drive and optical discs such as CDs and DVDs.

Hard drive: A storage device that uses magnetic disks to store programs and data, retaining them when the power is off.

Optical drive: A device that reads data from optical discs, such as CDs, DVDs or Blu-ray discs. Some models can also write data to compatible discs.

Floppy disk drive: An older storage device that reads and writes data on removable magnetic floppy disks, which have a low storage capacity.

Sound system: The hardware that processes and outputs audio. A sound card or integrated audio circuitry converts digital audio into analog signals for speakers or headphones.

Display system: The hardware that produces visual output. Graphics hardware processes image data, while a monitor or other display presents the resulting images.

Peripheral device: A device connected to a computer to provide input, output or additional storage, such as a keyboard, printer or external drive.

**10. Computing Innovations & Collaborative Development**

5 Big Ideas:

Creative Development, Data, Algorithms & Programming, Systems & Networks, and Impacts of Computing

**Computing Innovations:**

Something new built with a program or computer system is known as a computing innovation (why, what it does, who it's for).

A computing innovation is meant for people to use it. It doesn't have to be a new invention, it can just be a new use of existing technology/improve an existing process. It can serve a specific user group and doesn't have to be complex.

**User Interface**

The user interface is the part where the user interacts with the computer system.

Δ For a good interface, you should never make the user guess; users should know what to input, what the program is doing, and how to obtain the results from the provided information.

**Collaborative Development**

Discuss together, design solutions, find errors, and improve together.

Helps reduce personal bias and better understand the user's needs.

For pair programming, there is a driver (writes code) and navigator (checks logic/finds potential errors)

**Program Development**

Investigate => Design => Prototype => Test => Iterate (Repeat)

When developing a program, watch out for four kinds of errors:

Syntax, Logic, Runtime, Interface Issues

**11. 2D-Arrays**

An array is a set of values that are logically related with each other. Each individual value is known as the element of the array, and they are referred to in an array through their index. 2D-Arrays are an array of arrays. When writing code (python), we usually initialize an empty 2D-Array, or a 2D-Array full of zeros:

Where we can then replace these placeholders with actual values later on.

#Using a for loop to create an empty 2D-Array
nums = []
for i in range(6):
 j = []
 nums.append(j)
 for _ in range(6):
 j.append(0)print(nums)#OR using list comprehension to create an empty 2D-Array in one line
nums = [[0 for i in range(6)] for j in range(6)]#Using a for loop to create an empty 2D-Array
nums = []
for i in range(6):
 j = []
 nums.append(j)
 for _ in range(6):
 j.append(0)print(nums)#OR using list comprehension to create an empty 2D-Array in one line
nums = [[0 for i in range(6)] for j in range(6)](This section consists primarily of questions, so no overview is provided here.)

**12. Digital Processing**
