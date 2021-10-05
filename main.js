function main(){
  var canvas = document.getElementById("myCanvas");
  var gl = canvas.getContext("webgl");

  var vertices_left = [

      // Gagang
   -0.15, -0.25,  1.0, 1.0, 1.0, 
      -0.30, -0.24,   1.0, 1.0, 1.0, 
      -0.16, -0.19,   1.0, 1.0, 1.0, 

      -0.15,-0.25,   1.0, 1.0, 1.0, 
      -0.16, -0.19,   1.0, 1.0, 1.0, 
      -0.11,-0.15,   1.0, 1.0, 1.0, 
   
  - 0.16,-0.19,   1.0, 1.0, 1.0, 
      -0.11,-0.15,   1.0, 1.0, 1.0, 
      -0.12,-0.1,   1.0, 1.0, 1.0, 

      -0.11,-0.15,   1.0, 1.0, 1.0,
      -0.12,-0.1,   1.0, 1.0, 1.0, 
      -0.09,-0.08,   1.0, 1.0, 1.0, 

     -0.12,-0.1,    1.0, 1.0, 1.0, 
      -0.09,-0.08,   1.0, 1.0, 1.0, 
      -0.11,-0.05,   1.0, 1.0, 1.0, 

      -0.09,-0.08,   1.0, 1.0, 1.0, 
      -0.11, -0.05,  1.0, 1.0, 1.0, 
      -0.08, 0.0,  1.0, 1.0, 1.0, 
   
      -0.11,-0.05,   1.0, 1.0, 1.0, 
      -0.08, 0.0,   1.0, 1.0, 1.0, 
      -0.1, 0.0,  1.0, 1.0, 1.0, 

      -0.08,0.0,   1.0, 1.0, 1.0, 
      -0.1, 0.0,   1.0, 1.0, 1.0, 
      -0.09,0.08,   1.0, 1.0, 1.0, 
   
   -0.1,0.0,   1.0, 1.0, 1.0, 
      -0.09, 0.08,   1.0, 1.0, 1.0, 
      -0.11,0.05,   1.0, 1.0, 1.0, 

      -0.09,0.08,   1.0, 1.0, 1.0, 
      -0.11,0.05,   1.0, 1.0, 1.0, 
      -0.11, 0.15,  1.0, 1.0, 1.0, 

     -0.11,0.08,   1.0, 1.0, 1.0, 
     -0.11,0.15,   1.0, 1.0, 1.0, 
     -0.22,0.1,   1.0, 1.0, 1.0, 

     -0.25, 0.08,  1.0, 1.0, 1.0, 
      -0.20, 0.14,   1.0, 1.0, 1.0, 
      -0.26, 0.19,   1.0, 1.0, 1.0, 

      -0.25,0.08,   1.0, 1.0, 1.0, 
      -0.26, 0.15,   1.0, 1.0, 1.0, 
      -0.11,0.15,   1.0, 1.0, 1.0, 

     

//----------
    

      // TUTUP 
        //lengkung atas
      -0.20, 0.20,  0.1, 0.20, 0.85, 
      -0.28, 0.25,  0.1, 0.20, 0.85, 
      -0.26, 0.20,  0.1, 0.20, 0.85, 

      -0.28, 0.25,  0.1, 0.20, 0.85, 
      -0.26, 0.20,  0.1, 0.20, 0.85, 
      -0.31, 0.24,  0.1, 0.20, 0.85, 

      -0.28, 0.25,  0.1, 0.20, 0.85, 
      -0.31, 0.24,  0.1, 0.20, 0.85, 
      -0.35, 0.29,  0.1, 0.20, 0.85, 

      -0.31, 0.24,  0.1, 0.20, 0.85, 
      -0.35, 0.29,  0.1, 0.20, 0.85, 
      -0.4, 0.28,  0.1 ,0.20, 0.85, 

      -0.35, 0.29,  0.1, 0.20, 0.85, 
      -0.4, 0.28,  0.1, 0.20, 0.85, 
      -0.42, 0.31,  0.1, 0.20, 0.85, 

      -0.4, 0.28,  0.1, 0.20, 0.85, 
      -0.42, 0.31,  0.1, 0.20, 0.85, 
      -0.45, 0.29,  0.1, 0.20, 0.85, 

      -0.42, 0.31,  0.1, 0.20, 0.85, 
      -0.45, 0.29,  0.1, 0.20, 0.85, 
      -0.5, 0.32,  0.1, 0.20, 0.85, 

      -0.45, 0.29,  0.1, 0.20, 0.85, 
      -0.5, 0.32,  0.1, 0.20, 0.85, 
      -0.5, 0.3,  0.1, 0.20, 0.85, 

      -0.5, 0.32,  0.1, 0.20, 0.85, 
      -0.5, 0.3,  0.1, 0.20, 0.85, 
      -0.58, 0.31,  0.1, 0.20, 0.85, 

      -0.5, 0.3,  0.1, 0.20, 0.85, 
      -0.58, 0.31,  0.1, 0.20, 0.85, 
      -0.55, 0.29,  0.1, 0.20, 0.85, 

      -0.58, 0.31,  0.1, 0.20, 0.85, 
      -0.55, 0.29,  0.1, 0.20, 0.85, 
      -0.65, 0.29,  0.1, 0.20, 0.85, 

      -0.55, 0.29,  0.1, 0.20, 0.85, 
      -0.65, 0.29,  0.1, 0.20, 0.85, 
      -0.6, 0.28,  0.1, 0.20, 0.85, 

      -0.65, 0.29,  0.1, 0.20, 0.85, 
      -0.6, 0.28,  0.1, 0.20, 0.85, 
      -0.72, 0.25,  0.1, 0.20, 0.85, 

      -0.6, 0.28,  0.1, 0.20, 0.85, 
      -0.72, 0.25,  0.1, 0.20, 0.85, 
      -0.69, 0.24,  0.1, 0.20, 0.85, 

      -0.72, 0.25,  0.1, 0.20, 0.85, 
      -0.69, 0.24,  0.1, 0.20, 0.85, //D2
      -0.8, 0.2,  0.1, 0.20, 0.85, //B.

      -0.69, 0.24,  0.1, 0.20, 0.85, //D2
      -0.8, 0.2,  0.1, 0.20, 0.85, //B.
      -0.74, 0.2,  0.1, 0.20, 0.85, //F2
      
    //lengkung bawah
    
      -0.8, 0.2,  0.1, 0.20, 0.85, //B
      -0.74, 0.2,  0.1, 0.20, 0.85, //F2
      -0.72, 0.15,  0.1, 0.20, 0.85, //K.

      -0.74, 0.2,  0.1, 0.20, 0.85, //F2
      -0.72, 0.15,  0.1, 0.20, 0.85, //K.
      -0.66, 0.16,  0.1, 0.20, 0.85, //J2

      -0.72, 0.15,  0.1, 0.20, 0.85, //K
      -0.66, 0.16,  0.1, 0.20, 0.85, //J2
      -0.65, 0.11,  0.1, 0.20, 0.85, //M.

      -0.66, 0.16,  0.1, 0.20, 0.85, //J2
      -0.65, 0.11,  0.1, 0.20, 0.85, //M.
      -0.57, 0.13,  0.1, 0.20, 0.85, //H2

      -0.65, 0.11,  0.1, 0.20, 0.85, //M
      -0.57, 0.13,  0.1, 0.20, 0.85, //H2
      -0.58, 0.09,  0.1, 0.20, 0.85, //N.

      -0.57, 0.13,  0.1, 0.20, 0.85, //H2
      -0.58, 0.09,  0.1, 0.20, 0.85, //N.
      -0.5, 0.12,  0.1, 0.20, 0.85, //A2

      -0.58, 0.09,  0.1, 0.20, 0.85, //N.
      -0.5, 0.12,  0.1, 0.20, 0.85, //A2
      -0.5, 0.08, 0.1, 0.20, 0.85, //P.

      -0.5, 0.12,  0.1, 0.20, 0.85, //A2
      -0.5, 0.08,  0.1, 0.20, 0.85, //P.
      -0.43, 0.13,  0.1, 0.20, 0.85, //I2

      -0.5, 0.08,  0.1, 0.20, 0.85, //P.
      -0.43, 0.13,  0.1, 0.20, 0.85, //I2
      -0.42, 0.09,  0.1, 0.20, 0.85, //O.

      -0.43, 0.13,  0.1, 0.20, 0.85, //I2
      -0.42, 0.09,  0.1, 0.20, 0.85, //O.
      -0.36, 0.15,  0.1, 0.20, 0.85, //K2

      -0.42, 0.09,  0.1, 0.20, 0.85, //O.
      -0.36, 0.15,  0.1, 0.20, 0.85, //K2
      -0.35, 0.11,  0.1, 0.20, 0.85, //L.

      -0.36, 0.15,  0.1, 0.20, 0.85, //K2
      -0.35, 0.11,  0.1, 0.20, 0.85, //L.
      -0.31, 0.18,  0.1, 0.20, 0.85, //M2

      -0.35, 0.11,  0.1, 0.20, 0.85, //L.
      -0.31, 0.18,  0.1, 0.20, 0.85, //M2
      -0.28, 0.15,  0.1, 0.20, 0.85, //J.

      -0.31, 0.18,  0.1, 0.20, 0.85, //M2
      -0.28, 0.15,  0.1, 0.20, 0.85, //J.
      -0.26, 0.2,  0.1, 0.20, 0.85, //E2

      -0.28, 0.15,  0.1, 0.20, 0.85, //J.
      -0.26, 0.2,  0.1, 0.20, 0.85, //E2
      -0.20, 0.20,  0.1, 0.20, 0.85, //A .
      
        // diatas pembatas (Badan)
      -0.20, 0.20,  0.5, 0.5, 0.5, //A +
      -0.28, 0.15,  1.0, 1.0, 1.0, //J +
      -0.20, -0.25,  1.0, 1.0, 1.0, //S . -

      -0.28, 0.15,  1.0, 1.0, 1.0, //J
      -0.20, -0.25,  1.0, 1.0, 1.0, //S  .-
      -0.28,- 0.3,  1.0, 1.0, 1.0,//V .

      -0.28, 0.15,  1.0, 1.0, 1.0, //J
      -0.35, 0.11,  1.0, 1.0, 1.0, //L
      -0.28,- 0.3,  1.0, 1.0, 1.0,//V .

      -0.35, 0.11,  1.0, 1.0, 1.0, //L
      -0.28,- 0.3,  1.0, 1.0, 1.0,//V .
      -0.35, -0.34,  1.0, 1.0, 1.0,//Z .

      -0.35, 0.11,  1.0, 1.0, 1.0, //L
      -0.42, 0.09,  1.0, 1.0, 1.0, //O
      -0.35, -0.34,  1.0, 1.0, 1.0,//Z .

      -0.42, 0.09,  1.0, 0.0, 0.0, //O
      -0.35, -0.34,  1.0, 1.0, 1.0,//Z .
      -0.42, -0.36,  1.0, 1.0, 1.0, //B1.

      -0.42, 0.09,  1.0, 1.0, 1.0, //O
      -0.5, 0.08,  0.0, 1.0, 0.0, //P
      -0.42, -0.36,  1.0, 1.0, 1.0, //B1.

      -0.5, 0.08,  1.0, 1.0, 1.0, //P
      -0.42, -0.36,  1.0, 1.0, 1.0, //B1.
      -0.5, -0.37,  1.0, 1.0, 1.0, //T.

      -0.5, 0.08,  1.0, 1.0, 1.0, //P
      -0.5, -0.37,  1.0, 1.0, 1.0, //T.
      -0.58, 0.09,  1.0, 1.0, 1.0, //N

      -0.5, -0.37,  1.0, 1.0, 1.0, //T.
      -0.58, 0.09,  1.0, 1.0, 1.0, //N
      -0.58, -0.36,  1.0, 1.0, 1.0, //C1 .

      -0.58, 0.09,  1.0, 1.0, 1.0, //N
      -0.58, -0.36,  1.0, 1.0, 1.0, //C1 .
      -0.65, 0.11,  1.0, 1.0, 1.0, //M

      -0.58, -0.36,  1.0, 1.0, 1.0, //C1. 
      -0.65, 0.11,  1.0, 1.0, 1.0, //M
      -0.65, -0.34,  1.0, 1.0, 1.0, //A1 .

      -0.65, 0.11,  1.0, 0.0, 0.0, //M
      -0.65, -0.34,  1.0, 1.0, 1.0, //A1 .
      -0.72, 0.15,  1.0, 1.0, 1.0, //K

      -0.65, -0.34,  1.0, 1.0, 1.0, //A1 .
      -0.72, 0.15,  1.0, 1.0, 1.0, //K
      -0.72, -0.3,  0.0, 1.0, 0.0, //W .

      -0.72, 0.15,  1.0, 1.0, 1.0, //K
      -0.72, -0.3,  1.0, 1.0, 1.0, //W .
      -0.8, 0.2,  1.0, 1.0, 1.0, //B

      -0.72, -0.3,  1.0, 1.0, 1.0, //W .
      -0.8, 0.2,  1.0, 1.0, 1.0, //B
      -0.8, -0.25,  0.5, 0.5, 0.5, //U .

      // PEMISAH
      -0.20, -0.25,  0.5, 0.5, 0.5, //S  +
        -0.28, -0.3, 0.5, 0.5, 0.5,//V
        -0.20, -0.3,  0.5, 0.5, 0.5, //D1
  
        -0.28,- 0.3, 0.5, 0.5, 0.5,//V
        -0.20, -0.3,  0.5, 0.5, 0.5, //D1
        -0.28, -0.35,  0.5, 0.5, 0.5, //E1
  
        -0.28, -0.3, 0.5, 0.5, 0.5,//V
        -0.28, -0.35,  0.5, 0.5, 0.5, //E1
        -0.35, -0.34,  0.5, 0.5, 0.5,//Z   
  
        -0.28, -0.35,  0.5, 0.5, 0.5, //E1
        -0.35, -0.34,  0.5, 0.5, 0.5,//Z
        -0.35, -0.39,  0.5, 0.5, 0.5, //F1
  
        -0.35, -0.34,  0.5, 0.5, 0.5,//Z
        -0.35, -0.39,  0.5, 0.5, 0.5, //F1
        -0.42, -0.36,  0.5, 0.5, 0.5, //B1
  
        -0.35, -0.39,  0.5, 0.5, 0.5, //F1
        -0.42, -0.36,  0.5, 0.5, 0.5, //B1
        -0.42, -0.41,  0.5, 0.5, 0.5, //G1
  
        -0.42, -0.36,  0.5, 0.5, 0.5, //B1
        -0.42, -0.41,  0.5, 0.5, 0.5, //G1
        -0.5, -0.37,  0.5, 0.5, 0.5, //T
  
        -0.42, -0.41,  0.5, 0.5, 0.5, //G1
        -0.5, -0.37,  0.5, 0.5, 0.5, //T
        -0.5, -0.42,  0.5, 0.5, 0.5, //H1
  
        -0.5, -0.37,  0.5, 0.5, 0.5, //T
        -0.5, -0.42,  0.5, 0.5, 0.5, //H1
        -0.58, -0.36,  0.5, 0.5, 0.5, //C1
  
        -0.5, -0.42,  0.5, 0.5, 0.5, //H1
        -0.58, -0.36,  0.5, 0.5, 0.5, //C1
        -0.58, -0.41,  0.5, 0.5, 0.5, //I1
  
        -0.58, -0.36,  0.5, 0.5, 0.5, //C1
        -0.58, -0.41,  0.5, 0.5, 0.5, //I1
        -0.65, -0.34,  0.5, 0.5, 0.5, //A1
  
        -0.58, -0.41,  0.5, 0.5, 0.5, //I1
        -0.65, -0.34,  0.5, 0.5, 0.5, //A1
        -0.62, -0.39,  0.5, 0.5, 0.5, //J1
  
        -0.65, -0.34,  0.5, 0.5, 0.5, //A1
        -0.62, -0.39,  0.5, 0.5, 0.5, //J1
        -0.72, -0.3,  0.5, 0.5, 0.5, //W
  
        -0.62, -0.39,  0.5, 0.5, 0.5, //J1
        -0.72, -0.3,  0.5, 0.5, 0.5, //W
        -0.72, -0.35,  0.5, 0.5, 0.5, //K1
  
        -0.72, -0.3,  0.5, 0.5, 0.5, //W
        -0.72, -0.35,  0.5, 0.5, 0.5, //K1
        -0.8, -0.25,  0.5, 0.5, 0.5, //U
  
        -0.72, -0.35,  0.5, 0.5, 0.5, //K1
        -0.8, -0.25,  0.5, 0.5, 0.5, //U
        -0.8, -0.3,  0.5, 0.5, 0.5, //L1

      // BADAN BOTOL

      
  ];

  var vertices_right = [
      // TUTUP ATAS 
      

      
        //lengkung atas
        0.20, 0.20,  0.1, 0.20, 0.85, //A
        0.28, 0.25,  0.1, 0.20, 0.85, //D
        0.26, 0.20,  0.1, 0.20, 0.85, //E2
  
        0.28, 0.25,  0.1, 0.20, 0.85, //D
        0.26, 0.20,  0.1, 0.20, 0.85, //E2
        0.31, 0.24,  0.1, 0.20, 0.85, //C2
  
        0.28, 0.25,  0.1, 0.20, 0.85, //D
        0.31, 0.24,  0.1, 0.20, 0.85, //C2
        0.35, 0.29,  0.1, 0.20, 0.85, //E
  
        0.31, 0.24,  0.1, 0.20, 0.85, //C2
        0.35, 0.29,  0.1, 0.20, 0.85, //E
        0.4, 0.28,  0.1 ,0.20, 0.85, //W1
  
        0.35, 0.29,  0.1, 0.20, 0.85, //E
        0.4, 0.28,  0.1, 0.20, 0.85, //W1
        0.42, 0.31,  0.1, 0.20, 0.85, //F
  
        0.4, 0.28,  0.1, 0.20, 0.85, //W1
        0.42, 0.31,  0.1, 0.20, 0.85, //F
        0.45, 0.29,  0.1, 0.20, 0.85, //U1
  
        0.42, 0.31,  0.1, 0.20, 0.85, //F
        0.45, 0.29,  0.1, 0.20, 0.85, //U1
        0.5, 0.32,  0.1, 0.20, 0.85, //C
  
        0.45, 0.29,  0.1, 0.20, 0.85, //U1
        0.5, 0.32,  0.1, 0.20, 0.85, //C
        0.5, 0.3,  0.1, 0.20, 0.85, //T1
  
        0.5, 0.32,  0.1, 0.20, 0.85, //C
        0.5, 0.3,  0.1, 0.20, 0.85, //T1
        0.58, 0.31,  0.1, 0.20, 0.85, //G
  
        0.5, 0.3,  0.1, 0.20, 0.85, //T1
        0.58, 0.31,  0.1, 0.20, 0.85, //G
        0.55, 0.29,  0.1, 0.20, 0.85, //V1
  
        0.58, 0.31,  0.1, 0.20, 0.85, //G
        0.55, 0.29,  0.1, 0.20, 0.85, //V1
        0.65, 0.29,  0.1, 0.20, 0.85, //H
  
        0.55, 0.29,  0.1, 0.20, 0.85, //V1
        0.65, 0.29,  0.1, 0.20, 0.85, //H
        0.6, 0.28,  0.1, 0.20, 0.85, //Z1
  
        0.65, 0.29,  0.1, 0.20, 0.85, //H
        0.6, 0.28,  0.1, 0.20, 0.85, //Z1
        0.72, 0.25,  0.1, 0.20, 0.85, //I
  
        0.6, 0.28,  0.1, 0.20, 0.85, //Z1
        0.72, 0.25,  0.1, 0.20, 0.85, //I
        0.69, 0.24,  0.1, 0.20, 0.85, //D2
  
        0.72, 0.25,  0.1, 0.20, 0.85, //I
        0.69, 0.24,  0.1, 0.20, 0.85, //D2
        0.8, 0.2,  0.1, 0.20, 0.85, //B.
  
        0.69, 0.24,  0.1, 0.20, 0.85, //D2
        0.8, 0.2,  0.1, 0.20, 0.85, //B.
        0.74, 0.2,  0.1, 0.20, 0.85, //F2

      //lengkung bawah
        0.8, 0.2,  0.1, 0.20, 0.85, //B
        0.74, 0.2,  0.1, 0.20, 0.85, //F2
        0.72, 0.15,  0.1, 0.20, 0.85, //K.
  
        0.74, 0.2,  0.1, 0.20, 0.85, //F2
        0.72, 0.15,  0.1, 0.20, 0.85, //K.
        0.66, 0.16,  0.1, 0.20, 0.85, //J2
  
        0.72, 0.15,  0.1, 0.20, 0.85, //K
        0.66, 0.16,  0.1, 0.20, 0.85, //J2
        0.65, 0.11,  0.1, 0.20, 0.85, //M.
  
        0.66, 0.16,  0.1, 0.20, 0.85, //J2
        0.65, 0.11,  0.1, 0.20, 0.85, //M.
        0.57, 0.13,  0.1, 0.20, 0.85, //H2
  
        0.65, 0.11,  0.1, 0.20, 0.85, //M
        0.57, 0.13,  0.1, 0.20, 0.85, //H2
        0.58, 0.09,  0.1, 0.20, 0.85, //N.
  
        0.57, 0.13,  0.1, 0.20, 0.85, //H2
        0.58, 0.09,  0.1, 0.20, 0.85, //N.
        0.5, 0.12,  0.1, 0.20, 0.85, //A2
  
        0.58, 0.09,  0.1, 0.20, 0.85, //N.
        0.5, 0.12,  0.1, 0.20, 0.85, //A2
        0.5, 0.08, 0.1, 0.20, 0.85, //P.
  
        0.5, 0.12,  0.1, 0.20, 0.85, //A2
        0.5, 0.08,  0.1, 0.20, 0.85, //P.
        0.43, 0.13,  0.1, 0.20, 0.85, //I2
  
        0.5, 0.08,  0.1, 0.20, 0.85, //P.
        0.43, 0.13,  0.1, 0.20, 0.85, //I2
        0.42, 0.09,  0.1, 0.20, 0.85, //O.
  
        0.43, 0.13,  0.1, 0.20, 0.85, //I2
        0.42, 0.09,  0.1, 0.20, 0.85, //O.
        0.36, 0.15,  0.1, 0.20, 0.85, //K2
  
        0.42, 0.09,  0.1, 0.20, 0.85, //O.
        0.36, 0.15,  0.1, 0.20, 0.85, //K2
        0.35, 0.11,  0.1, 0.20, 0.85, //L.
  
        0.36, 0.15,  0.1, 0.20, 0.85, //K2
        0.35, 0.11,  0.1, 0.20, 0.85, //L.
        0.31, 0.18,  0.1, 0.20, 0.85, //M2
  
        0.35, 0.11,  0.1, 0.20, 0.85, //L.
        0.31, 0.18,  0.1, 0.20, 0.85, //M2
        0.28, 0.15,  0.1, 0.20, 0.85, //J.
  
        0.31, 0.18,  0.1, 0.20, 0.85, //M2
        0.28, 0.15,  0.1, 0.20, 0.85, //J.
        0.26, 0.2,  0.1, 0.20, 0.85, //E2
  
        0.28, 0.15,  0.1, 0.20, 0.85, //J.
        0.26, 0.2,  0.1, 0.20, 0.85, //E2
        0.20, 0.20,  0.1, 0.20, 0.85, //A .
        
          // (Badan)
        0.20, 0.20,  0.5, 0.5, 0.5, //A +
        0.28, 0.15,  1.0, 1.0, 1.0, //J +
        0.20, -0.25,  1.0, 1.0, 1.0, //S . -
  
        0.28, 0.15,  1.0, 1.0, 1.0, //J
        0.20, -0.25,  1.0, 1.0, 1.0, //S  .-
        0.28,- 0.3,  1.0, 1.0, 1.0,//V .
  
        0.28, 0.15,  1.0, 1.0, 1.0, //J
        0.35, 0.11,  1.0, 1.0, 1.0, //L
        0.28,- 0.3,  1.0, 1.0, 1.0,//V .
  
        0.35, 0.11,  1.0, 1.0, 1.0, //L
        0.28,- 0.3,  1.0, 1.0, 1.0,//V .
        0.35, -0.34,  1.0, 1.0, 1.0,//Z .
  
        0.35, 0.11,  1.0, 1.0, 1.0, //L
        0.42, 0.09,  1.0, 1.0, 1.0, //O
        0.35, -0.34,  1.0, 1.0, 1.0,//Z .
  
        0.42, 0.09,  1.0, 0.0, 0.0, //O
        0.35, -0.34,  1.0, 1.0, 1.0,//Z .
        0.42, -0.36,  1.0, 1.0, 1.0, //B1.
  
        0.42, 0.09,  1.0, 1.0, 1.0, //O
        0.5, 0.08,  0.0, 1.0, 0.0, //P
        0.42, -0.36,  1.0, 1.0, 1.0, //B1.
  
        0.5, 0.08,  1.0, 1.0, 1.0, //P
        0.42, -0.36,  1.0, 1.0, 1.0, //B1.
        0.5, -0.37,  1.0, 1.0, 1.0, //T.
  
        0.5, 0.08,  1.0, 1.0, 1.0, //P
        0.5, -0.37,  1.0, 1.0, 1.0, //T.
        0.58, 0.09,  1.0, 1.0, 1.0, //N
  
        0.5, -0.37,  1.0, 1.0, 1.0, //T.
        0.58, 0.09,  1.0, 1.0, 1.0, //N
        0.58, -0.36,  1.0, 1.0, 1.0, //C1 .
  
        0.58, 0.09,  1.0, 1.0, 1.0, //N
        0.58, -0.36,  1.0, 1.0, 1.0, //C1 .
        0.65, 0.11,  1.0, 1.0, 1.0, //M
  
        0.58, -0.36,  1.0, 1.0, 1.0, //C1. 
        0.65, 0.11,  1.0, 1.0, 1.0, //M
        0.65, -0.34,  1.0, 1.0, 1.0, //A1 .
  
        0.65, 0.11,  1.0, 0.0, 0.0, 
        0.65, -0.34,  1.0, 1.0, 1.0, 
        0.72, 0.15,  1.0, 1.0, 1.0, 

        0.65, -0.34,  1.0, 1.0, 1.0, 
        0.72, 0.15,  1.0, 1.0, 1.0, 
        0.72, -0.3,  0.0, 1.0, 0.0, 
  
        0.72, 0.15,  1.0, 1.0, 1.0, 
        0.72, -0.3,  1.0, 1.0, 1.0, 
        0.8, 0.2,  1.0, 1.0, 1.0, 
  
        0.72, -0.3,  1.0, 1.0, 1.0, 
        0.8, 0.2,  1.0, 1.0, 1.0, 
        0.8, -0.25,  1.0, 1.0, 1.0, 
  
        // bawah
        0.20, -0.25,  0.5, 0.5, 0.5, 
          0.28, -0.3, 0.5, 0.5, 0.5,
          0.20, -0.3,  0.5, 0.5, 0.5, 
    
          0.28,- 0.3, 0.5, 0.5, 0.5,
          0.20, -0.3,  0.5, 0.5, 0.5, 
          0.28, -0.35,  0.5, 0.5, 0.5, 
          0.28, -0.3, 0.5, 0.5, 0.5,
          0.28, -0.35,  0.5, 0.5, 0.5, 
          0.35, -0.34,  0.5, 0.5, 0.5, 
    
          0.28, -0.35,  0.5, 0.5, 0.5, 
          0.35, -0.34,  0.5, 0.5, 0.5,
          0.35, -0.39,  0.5, 0.5, 0.5, 
    
          0.35, -0.34,  0.5, 0.5, 0.5,
          0.35, -0.39,  0.5, 0.5, 0.5, 
          0.42, -0.36,  0.5, 0.5, 0.5, 
    
          0.35, -0.39,  0.5, 0.5, 0.5, 
          0.42, -0.36,  0.5, 0.5, 0.5, 
          0.42, -0.41,  0.5, 0.5, 0.5, 
    
          0.42, -0.36,  0.5, 0.5, 0.5, 
          0.42, -0.41,  0.5, 0.5, 0.5, 
          0.5, -0.37,  0.5, 0.5, 0.5, 
    
          0.42, -0.41,  0.5, 0.5, 0.5, 
          0.5, -0.37,  0.5, 0.5, 0.5, 
          0.5, -0.42,  0.5, 0.5, 0.5, 
    
          0.5, -0.37,  0.5, 0.5, 0.5, 
          0.5, -0.42,  0.5, 0.5, 0.5, 
          0.58, -0.36,  0.5, 0.5, 0.5, 
    
          0.5, -0.42,  0.5, 0.5, 0.5, 
          0.58, -0.36,  0.5, 0.5, 0.5, 
          0.58, -0.41,  0.5, 0.5, 0.5, 
    
          0.58, -0.36,  0.5, 0.5, 0.5, 
          0.58, -0.41,  0.5, 0.5, 0.5, 
          0.65, -0.34,  0.5, 0.5, 0.5, 
    
          0.58, -0.41,  0.5, 0.5, 0.5, 
          0.65, -0.34,  0.5, 0.5, 0.5, 
          0.62, -0.39,  0.5, 0.5, 0.5, 
    
          0.65, -0.34,  0.5, 0.5, 0.5, 
          0.62, -0.39,  0.5, 0.5, 0.5, 
          0.72, -0.3,  0.5, 0.5, 0.5, 
    
          0.62, -0.39,  0.5, 0.5, 0.5, 
          0.72, -0.3,  0.5, 0.5, 0.5, 
          0.72, -0.35,  0.5, 0.5, 0.5, 

          0.72, -0.3,  0.5, 0.5, 0.5, 
          0.72, -0.35,  0.5, 0.5, 0.5, 
          0.8, -0.25,  0.5, 0.5, 0.5, 
    
          0.72, -0.35,  0.5, 0.5, 0.5, 
          0.8, -0.25,  0.5, 0.5, 0.5, 
          0.8, -0.3,  0.5, 0.5, 0.5, 

  ];

  var vertices = [...vertices_left, ...vertices_right]; 

  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  var vertexShaderSource = `
      attribute vec2 aPosition;
      attribute vec3 aColor;
      varying  vec3 vColor;
      uniform mat4 uTranslate;
      void main(){
          gl_Position = uTranslate * vec4(aPosition, 0.0, 1.0);
          vColor = aColor;
      }
  `;

  var fragmentShaderSource = `
      precision mediump float;
      varying vec3 vColor;
      void main(){
          gl_FragColor = vec4(vColor, 1.0);
      }
  `;

  var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, vertexShaderSource);
  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader,fragmentShaderSource);

  gl.compileShader(vertexShader);
  gl.compileShader(fragmentShader);

  var shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);

  gl.linkProgram(shaderProgram);
  gl.useProgram(shaderProgram);

  var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 5*Float32Array.BYTES_PER_ELEMENT, 0);
  gl.enableVertexAttribArray(aPosition);

  var aColor = gl.getAttribLocation(shaderProgram, "aColor");
  gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 5*Float32Array.BYTES_PER_ELEMENT, 2*Float32Array.BYTES_PER_ELEMENT);
  gl.enableVertexAttribArray(aColor);

  var speed = 0.0165;// nrp 165
  var dy = 0;
  const uTranslate = gl.getUniformLocation(shaderProgram, 'uTranslate');
  
  function render() {
      if (dy >= 0.64 || dy <= -0.6) speed = -speed;
  dy += speed;
      
  const left = [
    1.0, 0.0, 0.0, 0.0,
    0.0, 1.0, 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    0, 0.0, 0.0, 1.0,
  ]
  
  const right = [
    1.0, 0.0, 0.0, 0.0,
    0.0, 1.0, 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    0, dy, 0.0, 1.0,
  ]
  
  gl.clearColor(0.5, 0.5, 0.5, 0.5);
  gl.clear(gl.COLOR_BUFFER_BIT);

      gl.uniformMatrix4fv(uTranslate, false, left);
      gl.drawArrays(gl.TRIANGLES, 0, vertices_left.length/5);

  gl.uniformMatrix4fv(uTranslate, false, right);
      gl.drawArrays(gl.TRIANGLES, vertices_left.length/5, vertices_right.length/5);
          
      requestAnimationFrame(render);
  }
  render();
}