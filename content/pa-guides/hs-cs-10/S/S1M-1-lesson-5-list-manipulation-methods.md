# S1M-1 Lesson 5: List Manipulation Methods

> From the Grade 10 Resource Department's Semester 1 Midterm Computer Science S review guide (PA). Writers: Colin 10(9). Editor: Colin 10(9). Range: Lesson 4 to Lesson 7. Student-made reference material: where it differs from class, follow class.

**Grade 10 Computer Science Review Guide (Lessons 4–6)**

## Section 1: Microprocessors & CPU (Lesson 4)

**1. CPU Architecture & Components**

- **Microprocessor:** An integrated circuit on a single chip; functions as the computer's "brain" consisting of microscopic transistors (current passing = 1, no current = 0).
- **Central Processing Unit (CPU):** Contains two core components:
  - **Control Unit (CU):** Directs the entire system using electrical signals to execute/store programs.
    - Instruction Cycle: Fetches instructions $\to$ decodes them $\to$ sends electrical signals to Memory, ALU, and I/O devices.
  - **Arithmetic/Logic Unit (ALU):**
    - Arithmetic: Addition, subtraction, multiplication, division.
    - Logic: Greater than, less than, equal to, not equal to.
- **Registers:** Special-purpose, high-speed, temporary storage areas for instructions/data (located inside the CPU, not main memory).

**2. Storage Systems**

- **Memory (Primary Storage):** Volatile, temporary storage.
- **Secondary Storage (Hard Disk, USB, etc.):** Non-volatile, permanent storage. More cost-effective than primary memory for large datasets.
- **Addressing:** Method used by the system to locate data via specific memory addresses.

**3. CPU Instructions & Execution Speed**

- **4 Core Instructions:** Fetch, Decode, Execute, Store.
- **Machine Cycles:**
  - **I-time (Instruction Time):** Fetch and Decode.
  - **E-time (Execution Time):** Execute and Store.
  - Each instruction takes **one machine cycle**.
- **Performance Factors:**
  - **Clock Speed:** Number of fetch/process cycles per second, measured in **GHz** (often multi-core).
  - **Word Size:** Processor processing capacity (e.g., 16-bit, 32-bit, 64-bit).
  - **CPU Cache:** Fast RAM subset reducing average data access time from main memory (multi-level hierarchy: L1 checks first, then L2, etc.).
  - **Cooler:** Regulates hardware temperature.

**4. Multi-Tasking & Processing Types**

- **Multi-core:** CPU with multiple processing cores.
- **Processing Paradigms:**
  - **Serial Processing:** Completes all steps of one instruction before starting the next.
  - **Pipeline Processing:** Begins executing an instruction before the previous one finishes (overlapped execution).
  - **Parallel Processing:** Executes multiple instructions simultaneously using multi-core architectures.

## Section 2: Data Representation & Binary Systems (CS-N Lessons 2–4)

**1. Data vs. Information**

- **Data:** Raw symbols representing facts, objects, and ideas.
- **Information:** Data presented in a format understandable and useful to humans.
- **Representation Forms:**
  - Analog: Continuous range.
  - Digital: Discrete states (on/off).

**2. Binary Units & Storage Scaling**

- **Bit (b):** Binary digit (0 or 1).
- **Byte (B):** $8\text{bits}=1\text{Byte}$.
- **Scale (**$1024$ **multiplier):** $\text{KB}\to \text{MB}\to \text{GB}\to \text{TB}\to \text{PB}$.

**3. Number Systems & Base Conversions**

- **Notations:** Decimal (${X}_{10}$), Binary (${X}_{2}$).
- **Bases:**
  - **Decimal:** Base-10 ($0--9$)
  - **Binary:** Base-2 ($0,1$)
  - **Octal:** Base-8 ($0--7$) $\to$ Group binary bits in sets of **3**.
  - **Hexadecimal:** Base-16 ($0--9,A--F$) $\to$ Group binary bits in sets of **4**.

**4. Binary Arithmetic**

- **Addition:**
  - $$0+0=0$$
  - $$0+1=1$$
  - $1+1=0$ (carry $1$ forward)
- **Subtraction:**
  - $$0-0=0$$
  - $$1-1=0$$
  - $$1-0=1$$
  - $0-1=1$ (borrow $1$)

**5. Floating-Point & Negative Numbers**

- **Conversion:** Separate integer and fractional parts (multiply fractional part repeatedly by $2$).
  - Example: $7.625\to 7={111}_{2}$; $0.625={0.101}_{2}\to {111.101}_{2}$.
- **Precision limits:**
  - **Truncation:** Cutting off excess bits ($0.0110101\to 0.011010$).
  - **Round-off:** Adjusting the final retained bit ($0.0110101\to 0.011011$).
- **Mantissa Overflow:** Calculated value exceeds reserved digits. Structured as: **Sign, Mantissa, Exponent** (similar to scientific notation).
- **Two's Complement (Negative Binary):** Convert number to binary $\to$ invert bits ($0↔1$) $\to$ add $1$ bit at the end.

**6. Character Encodings**

- **ASCII:** 7-bit code (${2}^{7}=128$ characters).
  - Key mappings: 48 (${30}_{16}$) = 0; 65 (${41}_{16}$) = A; 97 (${61}_{16}$) = a.
  - Spacing: Space = $1\text{byte}$; Enter = $2\text{bytes}$ (Windows) or $1\text{byte}$ (macOS).
- **Unicode (UTF):** Comprehensive system overcoming ASCII limitations ($\text{UTF-32}\to \text{UTF-16}\to \text{UTF-8}$). Chinese characters typically consume $3\text{bytes}$ (rarely $4$).

## Section 3: Python Lists (Lessons 5 & 6 & 7)

- .title() — Uppercases the first letter of a string.
- .append(element) — Adds an item to the end of the list.
- .extend(iterable) — Extends the list with another iterable.
- .insert(index, element) — Inserts an item at a specific index.
- .remove(element) — Removes the first matching element found (left-to-right).
- .pop(index) — Removes and returns an item at a specified index (defaults to the last item).
- del element[index] — Deletes an item by its index number.
- .clear() — Empties the entire list.
- .sort(key, reverse=True) — Sorts a list in-place (based on ASCII for strings); reverse=True flips order.
- .sorted(iterable) — Returns a temporarily sorted copy.
- .reverse() — Reverses the list in-place.
- len(element) — Returns the length of the list.
- .copy() — Returns a shallow copy of the list.
- .index(element) — Finds the index of the first occurrence of an element.
- .count(element) — Counts how many times an element appears.
