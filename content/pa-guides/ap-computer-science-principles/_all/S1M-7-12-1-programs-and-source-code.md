# S1M-7 12.1 Programs and source code

> From the Grade 10 Resource Department's Semester 1 Midterm Computer Science AP review guide (PA). Writers: Summer Liang 10-4, Forrest Yan 10-8. Editor: Caitlin Zhou 10-2, Rick Yu 10-12. Range: ALL. Student-made reference material: where it differs from class, follow class.

Computer programmers create programs that control digital devices. They usually write these programs in a high-level programming language. The human-readable version of a program is called source code.

A processor executes machine-language instructions represented by 0s and 1s. A compiler or interpreter translates the source program into operations the processor can execute. Translation involves expressing the program using the processor's instruction set, rather than simply replacing each source-code character with its binary character code.

| **Feature** | **Compiler** | **Interpreter** |
|---|---|---|
| Translation | Translates the whole source program before it runs. | Translates and executes one statement at a time in the lesson's simplified model. |
| Output | Produces object code that can be saved and used in a later execution. | Does not save a separate translated machine-code program in this model. |
| Running a program | Two stages: translate the program, then execute the resulting code. | Translation and execution proceed together. |
| Main advantage | After translation, execution is generally faster. | Supports convenient development, testing and correction of code. |
| Different platforms | Generated machine code depends on the target platform. | Source can run on another platform with a suitable interpreter and required support. |

## 12.2 Instruction sets and machine language

A processor is an integrated circuit designed to process instructions. A microprocessor implements this circuitry on a chip, typically made using silicon. These chips and other components connect through the system board.

An instruction set is the collection of machine instructions a processor can execute directly. Simple operations include addition, subtraction, counting and comparison. These operations can be combined to carry out many different tasks, making the processor general purpose.

A machine-language instruction has two parts:

| **Part** | **Meaning** | **Example** |
|---|---|---|
| Opcode | Operation code that tells the processor which action to perform. | MOV |
| Operand | The value, register or memory location used by the operation. | AL, 34h (AL is an IR, while 34h is a hexadecimal val) |

These bit patterns are an example encoding for the lesson, rather than a universal encoding used by every processor.

## 12.3 Processor logic and registers

In a stored-program model, program instructions and data are loaded into main memory (RAM) from input or secondary storage before execution. The CPU works with memory to process input and produce output. Secondary storage retains programs and data between uses.

The CPU contains a control unit (CU), an arithmetic logic unit (ALU), and registers. Registers are small, fast temporary storage locations used for instructions, data and intermediate results.

| **Component or register** | **Role** |
|---|---|
| Control unit (CU) | Uses control signals to coordinate instruction execution and direct data between memory, registers, the ALU and other system components. |
| Arithmetic logic unit (ALU) | Performs arithmetic, such as addition and subtraction, and logical operations, such as comparing two values. |
| Program counter (PC) | Holds the memory address of the next instruction to fetch. |
| Instruction register (IR) | Holds the fetched instruction while the CPU decodes and executes it. |
| General purpose registers | Hold operands and intermediate values during processing. |
| Accumulator | In the lesson's example, holds an ALU result before it is used again or transferred to memory. |

The CU fetches the instruction from the address in the PC into the IR and updates the PC for the following instruction. The ALU performs the required calculation when directed by the CU.

## 12.4 The machine instruction cycle

A machine cycle, also called an instruction cycle, is the process of fetching and carrying out one machine instruction. It include four stages:

| **Stage** | **What happens** | **Timing group** |
|---|---|---|
| 1 Fetch | The CU retrieves the next instruction from memory and places it in the IR. | Instruction time (I-time) |
| 2 Decode | The CU interprets the opcode and identifies the operands or required data locations. | Instruction time (I-time) |
| 3 Execute | The required data is moved into registers. The ALU performs an arithmetic or logical operation when needed. | Execution time (E-time) |
| 4 Store | The result is written to a register or memory for later use, output or permanent storage. | Execution time (E-time) |

Instruction time + execution time = one machine instruction cycle. An instruction cycle can span multiple clock cycles.

Example: to add 4 and 5 and save the result, the CU fetches and decodes the instruction, arranges for the operands to reach registers, signals the ALU to calculate 9, and stores the result. The CU coordinates these steps; the ALU carries out the arithmetic.

**13. Microprocessors and Memory**
