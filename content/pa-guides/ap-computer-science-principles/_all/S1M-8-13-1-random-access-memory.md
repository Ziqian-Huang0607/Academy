# S1M-8 13.1 Random access memory

> From the Grade 10 Resource Department's Semester 1 Midterm Computer Science AP review guide (PA). Writers: Summer Liang 10-4, Forrest Yan 10-8. Editor: Caitlin Zhou 10-2, Rick Yu 10-12. Range: ALL. Student-made reference material: where it differs from class, follow class.

Random access memory (RAM) is the computer's working memory. It holds instructions and data for programs in use, raw data waiting to be processed, and results waiting to be output or saved.

RAM acts as a waiting room for the processor. The CU coordinates movement of instructions and data between RAM and the CPU. After processing, results can return to RAM until they are needed again or sent to an output or storage device.

RAM is volatile: its contents are lost when power is removed. Secondary storage retains data without continuous power and usually offers greater capacity. Saving a file copies data from working memory to persistent storage.

In dynamic RAM (DRAM), microscopic capacitors represent bits using charge. In the lesson's model, a charged capacitor represents 1 and a discharged capacitor represents 0. Eight bits form one byte, and memory locations have addresses. The charge must be refreshed to retain the data.

| **RAM measure** | **Meaning and example** |
|---|---|
| Capacity in GB | The amount of data RAM can hold. More capacity allows larger programs and more data to remain in working memory, up to the computer's supported limit. |
| Frequency in MHz | Millions of cycles per second. Under comparable conditions, a higher rating indicates faster operation. |
| Access time in ns | Time taken to respond. One nanosecond is one billionth of a second; lower is faster |

## 13.2 Types of RAM

| **Feature** | **SRAM** | **DRAM** |
|---|---|---|
| Full name | Static random access memory | Dynamic random access memory |
| Data retention while powered | Holds its state without periodic refresh. | Stores charge that must be refreshed. |
| Typical access speed | Faster | Slower |
| Storage density | Lower density; usually smaller capacity for a comparable chip area. | Higher density; suitable for larger memory capacity. |
| Cost for a comparable capacity | More expensive | Less expensive |
| Power loss | Data is lost. | Data is lost. |

SDRAM means synchronous dynamic random access memory. It coordinates memory operations with a clock to improve the interface between the memory and its controller. DDR memory is a family of synchronous DRAM. DDR generations include DDR, DDR2, DDR3 and DDR4; different generations are not interchangeable and must match the system's supported memory type.

## 13.3 Virtual memory

When programs need more working space than the available RAM can provide, the operating system can use part of secondary storage as virtual memory. It keeps some program or data portions there and brings them back into RAM when needed.

Virtual memory allows the computer to handle a larger working set, but frequent movement between storage and RAM reduces performance because secondary storage is slower. Adding compatible RAM, within the system's limits, can reduce reliance on virtual memory.

## 13.4 ROM and the startup process

Read only memory (ROM) is nonvolatile memory (it retains its contents without power).

The BIOS(Basic Input Output System) startup model performs internal hardware checks and starts the process of finding the operating system and loading its kernel from storage into RAM. The kernel is the central part of the operating system; loading and starting the operating system is called bootstrapping, or booting.

Startup sequence: power on -> run BIOS firmware and check hardware -> locate the operating system on storage -> load the kernel into RAM -> begin operating system control.

| **Memory type** | **Main property** |
|---|---|
| MROM(Mask ROM) | Programmed during manufacture and read only in normal use. |
| PROM(Programmable ROM) | Can be programmed once. |
| EPROM(Erasable PROM) | Can be erased and programmed again. |
| EEPROM (Electrically EPROM) | Can be erased and reprogrammed electrically. |
| Flash memory | Nonvolatile memory that can be electrically erased and rewritten. It retains stored data without power. |

## 13.5 Cache and the memory hierarchy

Cache is a relatively small, very fast memory used to speed up access to instructions and data. Keeping useful items close to the CPU reduces the time spent fetching them from slower main memory. Cache commonly has levels called L1, L2 and L3.

The main working-data hierarchy is registers, then cache, then RAM, then secondary storage. Registers and cache provide fast access with small capacity. RAM provides more working space. Secondary storage retains larger amounts of data between uses. Virtual memory uses secondary storage under operating system control.

| **Storage area** | **Primary purpose** | **Retains data without power** |
|---|---|---|
| Registers | Operands, instructions and intermediate results inside the CPU. | No |
| Cache | Fast access to data and instructions near the CPU. | No |
| RAM | Working instructions and data for active programs. | No |
| ROM or flash firmware | Persistent startup instructions. | Yes |
| Secondary storage | Longer term storage of programs and files. | Yes |

## 13.6 Factors affecting CPU performance

CPU performance depends on clock speed, data transfer, cache, word size, instruction set, core count and how instructions are scheduled.

| **Factor** | **Meaning** **&** **effect** **& notes** |
|---|---|
| Clock speed | The clock sets the pace of processor activity. |
| Instructions per cycle | Clock speed is not the same as instructions per second. Some instructions take several cycles, while some processors complete more than one instruction in a cycle. |
| Front side bus (FSB) | FSB carries data to and from the processor. A faster bus can reduce delays in data transfer. Its frequency is expressed in MHz. |
| Cache | A small, fast memory that can reduce time waiting for instructions and data from RAM. |
| Word size | The number of bits the processor can manipulate at one time. A larger word allows it to handle more bits in an operation. |
| Instruction set | Determines the machine operations available and how a task is expressed as instructions. |
| Multiple cores | Multiple cores can work on separate tasks or portions of a task when the software supports this. |

## 13.7 RISC and CISC instruction sets

| **Feature** | **RISC** | **CISC** |
|---|---|---|
| Full name | Reduced instruction set computing | Complex instruction set computing |
| General approach | Emphasizes simpler instructions. | Includes more complex instructions. |
| Cycles and task length | use fewer cycles but more instructions. | perform more work but require several cycles. |
| Traditional design tradeoff | Simpler instruction execution logic. | More complex execution logic, with potential power costs. |

The distinction between RISC and CISC have become less clear as implementations have evolved.

## 13.8 Pipelining and parallel processing

Pipelining overlaps the stages of different instructions. While one instruction is executing, another can be decoding and a later one can be fetched. The next instruction can begin before the previous instruction has completed every stage. This improves the rate at which instructions move through the processor.

Without pipelining, instruction 1 completes fetch, decode, execute and store before instruction 2 begins. With pipelining, different instructions occupy different stages at the same time.

Parallel processing uses multiple processors or processing cores at the same time. A task therefore can be divided into parts, processed concurrently and have its results combined. Pipelining overlaps instruction stages, while parallel processing performs work across multiple processing units.

## 13.9 Overclocking

Overclocking increases the operating speed of a component beyond its normal rated setting. However, it also can cause overheating and unreliable operation.
