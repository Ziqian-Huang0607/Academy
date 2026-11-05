# S1F-2 3.1 Frame Rate

> From the Grade 9 Resource Department's Semester 1 Final Computer Science S review guide (PA). Writers: Leona 9-7. Editor: Max Zheng 9-1. Range: CH2-CH3. Student-made reference material: where it differs from class, follow class.

- **Video: fast switching pictures**
  - Frame rate: AKA frame frequency/frames per second (FPS); the frequence at which an imaging device produces unique consecutive images called frames
  - unit: FPS, Hz(Hertz)
  - threshold of human visual perception: 24 fps
- Standard frame rates in cinema/TV: 24 fps(cinematic films), 25 fps(PAL(Asia), SECAM(Europe)), 30 fps(NTSC, North America).
- 24 fps: progressive format, transferring video signal to film (fps of film: 23.976)
- 48 fps: progressive format trialed in the film industry, reduce motion blur and flicker, EG “THe Hobbit”
- 50 or 60 fps: HDTV/video in high definition based on 25 and 30 fps

## 3.2 Data Rate and Bandwidth

- Stream: sequence of data elements made available over time
  - divides a video into several parts, which are transported one by one, while one part is playing the next is being loaded
- Bandwidth: measurement of bit-rate of available or consumed data communication resources expressed in bits per second or multiples of it
- Data rate: speed of stream transmission
  - decides how much data will be transported each second
  - Conversion:
    - 1 TB = 1024 GB
    - 1 GB = 1024 Mbps
    - 1 Mbps = 1024 Kbps (Kilobyte)
    - 1 Kbps = 1024 Byte
    - 1 Byte = 8 bit
  - Data rate = File size (bit) / length of file (sec)
  - unit of data rate and bandwidth are both bps (bits per second)
  - data rate is determined by: screen size, frame rate, and codec
    - data rte of SD vid: around 512 KB-2M
    - data rate of 720P vid: 4MB-16MB
    - data rate of 1080 vid: 8MB-48MB
  - Bandwidth of our internet connection should be larger than the data rate of video

**3.3. 3D Vision**

- 3D vision: we see two 2D images separately with out left and right eye, our brain combines them and gives a 3D depth
- **Anaglyph 3D:**
  - stereoscopic 3D effect achieved by means of encoding each eye’s image using filters of different colors, typically red and cyan
  - contain two differently filtered colored images, one for each eye
  - color filters to create 3D effect, eg. red-cyan color filters
- **Polarization 3D system:**
  - polarization glasses to create the illusion of 3D images by restricting the light that reaches each eye
  - low-cost eyeglasses which contain a pair of different polarizing filters
  - two images are projected superimposed the same screen or display through different polarizing filters
  - linear polarizer converts an unpolarized beam into one with a single linear polarization:
    - vertical components of all waves are transmitted
    - horizontal components are absorbed and reflected
- **Active Shutter 3D system:**
  - openly presenting the image intended for the left eye while blocking the right eye’s view, then presenting the right0eye’s image while blocking the left eye
  - this is repeated rapidly so that the interruptions do not interfere with the perceived fusion of the two images into a single 3D image
  - EG NVIDIA 3D vision system
- **HUD:**
  - Head mounted display (HMD): display device worn on the head/part of a helmet, has a small display optic in front of one or each eye
  - EG Google Glasses

## 3.4 Video Compression

- **Uncompressed**: stores every single data of a video, both useful and useless
  - loses no quality during the process of editing or copying from one form of media into another
- **video compression**: encoding or decoding a digital data strean or signal
  - **lossless**: used for archiving data in a compressed form while retaining all the information present in the orginal stream
  - **lossy**: reduce quality by some amount in order to achieve compression, formats include mpeg, mov, mkv
  - **encoder/decoder**: used in multi-media area for video compression and decompression
  - **codec and format**: old time codec and format are strongly related, even the players are related to the codecs
  - usually format and codec are in pairs, but not always
    - sometimes we cannot open a video with one format while another video with this format can be opened
  - **container format**: special video format that allowed the users to encode videos with different codecs but sharing the same format name or extension
    - eg. AVI, QuickTime(MOV), Mpeg4 etc
    - contain different codecs but allows users to encode audio/vid with different compressors
    - Video support:
    - Audio support:

## 3.5 Video Connectors

- **Video connectors**: electric connectors for carrying video signal, of either analog or digital format
  - both analog and digital signals are used with some styles of connectors, knowledge of the interface used is necessary for a successful signal transmission
  - some interface types use only a distinctive connectors or family of connectors to ensure compatibility
- **VGA**(Video Graphic Array): three-row 15-pin connector, the 15-pin VGA connector is found on many video cards, computer monitors, and high definition TV sets
  - same VGA cable can be used with a variety of supported VGA resolutions
  - ranging from 640*350 px at 70 Hz to 1280*1024 px at 85 Hz and up to 2048*1536 px at 85 Hz
  - 25 MB/s
- **DVI(**Digital Visual Interface**):** designed to transmit uncompressed digital video, can be configured to support multiple modes, DVI-D, DVI-A, or DVI-I
  - Digital vid stream: 1920*1200 at 60 Hz - 2560*1600 at 60 Hz
  - Analog vid stream: 1920*1200 at 60 Hz
  - 7.92 Gbits/s
- **HDMI**: Proprietary audio/video interface for transferring uncompressed video data and compressed or uncompressed digital audio data
  - 2.25 GB/s
- **Thunderbolt**: 40 Gbits/s

## 3.6 Storage Devices

- **Magnetic storage**: uses different patterns of magnetisation in a magnetisable material to store data is a form of non-volatile memory
  - Analog recording
  - Digital recording: floppy disk, hard disk
- **Optical storage**: optical disc is a flat, usually circular disc which encodes binary data in the form of pits (0) and lands (1) on a spcial material (aluminum) on one of its flat surface
  - CD, DVD, HD DVD, Blue-Ray
- **Flash storage**: electron non-volatile computer storage medium that can be electrically erased and reprogrammed
  - memory cards
  - USB flash drives
  - solid0state drives (SSD)
