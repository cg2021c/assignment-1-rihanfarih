//Mirrored from www.cs.unm.edu/~angel/BOOK/INTERACTIVE_COMPUTER_GRAPHICS/ SIXTH_EDITION/CODE/WebGL/7E/04/cube.html by HTTrack Website Copier/3.x [XR&CO'2010], Fri, 23 Aug 2013 18:49:22 GMT 
var canvas;
var gl;

var NumSides = 12;
// flattened points and colors to be sent to Vertex Shader
var points = [];
var colors = [];
var points2 = [];
var colors2 = [];

// rotation stuff
var theta = [ 205, 0, 0 ];
var theta2 = [ -165, 0, 0 ];

var thetaLoc;   // rotation uniform
var cyl_vertices, cyl_colors;
var cyl_vertices2, cyl_colors2;

function main(){
    // Access the canvas through DOM: Document Object Model
    canvas = document.getElementById('gl-canvas');   // The paper
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    gl = canvas.getContext('webgl');                // The brush and the paints

    // Gelas Kiri
    var x, z;
    var angle = 0;
    var inc = Math.PI * 2.0 / NumSides;

    cyl_vertices = new Array(NumSides * 2);
    cyl_colors   = new Array(NumSides * 2);

    alt_colors = [[1.0, 0.5, 0.5, 1.0], [0.5, 1.0, 0.5, 1.0], [0.5, 0.5, 1.0, 1.0]];
   
    for(var i_side = 0; i_side < NumSides; i_side++) {
        x = 0.35 * Math.cos(angle);
        z = 0.35 * Math.sin(angle);

        cyl_vertices[i_side] = vec3(x, 1, z);
        cyl_colors[i_side] = alt_colors[i_side%3];

        cyl_vertices[i_side+NumSides] = vec3(x, -0.8, z);
        cyl_colors[i_side+NumSides] = alt_colors[i_side%3];

        angle += inc;
    }

    for(var i_side = 0; i_side < NumSides-1; i_side++) {
        quad(i_side+1, i_side, NumSides+i_side, NumSides+i_side+1, points, colors,cyl_vertices);
    }
    quad(0, NumSides-1, 2*NumSides-1, NumSides, points, colors,cyl_vertices);

    // Gelas Kanan
    var x2, z2;
    var angle2 = 0;

    cyl_vertices2 = new Array(NumSides * 2);
    cyl_colors2   = new Array(NumSides * 2);

    alt_colors2 = [[1.0, 0.5, 0.5, 1.0], [0.5, 1.0, 0.5, 1.0], [0.5, 0.5, 1.0, 1.0]];
    for(var i_side = 0; i_side < NumSides; i_side++) {
        x2 = 0.35 * Math.cos(angle2);
        z2 = 0.35 * Math.sin(angle2);

        cyl_vertices2[i_side] = vec3(x2, 0.8, z2);
        cyl_colors2[i_side] = alt_colors[i_side%3];

        cyl_vertices2[i_side+NumSides] = vec3(x2, -0.8, z2);
        cyl_colors2[i_side+NumSides] = alt_colors[i_side%3];

        angle2 += inc;
    }

    for(var i_side = 0; i_side < NumSides-1; i_side++) {
        quad(i_side+1, i_side, NumSides+i_side, NumSides+i_side+1, points2, colors2, cyl_vertices2);
    }
    quad(0, NumSides-1, 2*NumSides-1, NumSides, points2, colors2, cyl_vertices2);

    var len = 6*NumSides;

    var vertices = [...points, ...points2];
    var totcolors = [...colors, ...colors2];

    var cBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, cBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(totcolors), gl.STATIC_DRAW );


    var vertexShaderSource = `
    attribute  vec4 vPosition;
    attribute  vec4 vColor;
    varying vec4 fColor;
    
    uniform vec3 theta;
    uniform mat4 u_matrix;
    void main() {
        // Compute the sines and cosines of theta for each of
        //   the three axes in one computation.
        vec3 angles = radians( theta );
        vec3 c = cos( angles );
        vec3 s = sin( angles );
    
        // Remeber: thse matrices are column-major
        mat4 rx = mat4( 1.0,  0.0,  0.0, 0.0,
                        0.0,  c.x,  s.x, 0.0,
                        0.0, -s.x,  c.x, 0.0,
                        0.0,  0.0,  0.0, 1.0 );
    
        mat4 ry = mat4( c.y, 0.0, -s.y, 0.0,
                        0.0, 1.0,  0.0, 0.0,
                        s.y, 0.0,  c.y, 0.0,
                        0.0, 0.0,  0.0, 1.0 );
    
    
        mat4 rz = mat4( c.z, -s.z, 0.0, 0.0,
                        s.z,  c.z, 0.0, 0.0,
                        0.0,  0.0, 1.0, 0.0,
                        0.0,  0.0, 0.0, 1.0 );
        float scale = 0.5;
        mat4 dilationMatrix = mat4(
            scale, 0., 0., 0.,
            0., scale, 0., 0.,
            0., 0., scale, 0.,
            0., 0., 0., 1.
        );

        fColor = vColor;
        gl_Position = dilationMatrix * rz * ry * rx * u_matrix * vPosition;
     } 
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec4 fColor;

        void main() {
            gl_FragColor = fColor;
        }
    `;
    
    // Create .c in GPU
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);

    // Compile .c into .o
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);

    // Prepare a .exe shell (shader program)
    var shaderProgram = gl.createProgram();

    // Put the two .o files into the shell
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);

    // Link the two .o files, so together they can be a runnable program/context.
    gl.linkProgram(shaderProgram);

    // Start using the context (analogy: start using the paints and the brushes)
     gl.useProgram(shaderProgram);

    // Teach the computer how to collect
    // the positional values from ARRAY_BUFFER
    // to each vertex being processed
    var vColor = gl.getAttribLocation( shaderProgram, "vColor" );
    gl.vertexAttribPointer( vColor, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vColor );
    
    var vBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW );
    
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer );
    var vPosition = gl.getAttribLocation( shaderProgram, "vPosition" );
    gl.vertexAttribPointer( vPosition, 3, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );

    thetaLoc = gl.getUniformLocation(shaderProgram, "theta"); 
    gl.clearColor( 0.2, 0.2, 0.2, 1.0 );
    
    var speed = 0.0165; // nrp
    var dy = 0;

    function render()
    {
        if (dy >= 0.75 || dy <= -0.55) speed = -speed;
		dy += speed;

        gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.useProgram(shaderProgram);
        gl.uniform3fv(thetaLoc, theta);
        const u_matrix = gl.getUniformLocation(shaderProgram, "u_matrix");
        const leftObject = [1., 0., 0., 0.,
                0., 1., 0., 0.,
                0., 0., 1., 0.,
                -1.2, 0, 0, 1.];

        const rightObject = [1., 0., 0., 0.,
            0., 1., 0., 0.,
            0., 0., 1., 0.,
            1.2, dy, 0, 1.];

        gl.uniformMatrix4fv(u_matrix, false, leftObject);
        gl.drawArrays( gl.TRIANGLES, 0, len );

        gl.uniform3fv(thetaLoc, theta2);
        gl.uniformMatrix4fv(u_matrix, false, rightObject);
        gl.drawArrays( gl.TRIANGLES, len, len );
        requestAnimationFrame( render );
    }
    render();
}

function quad(a, b, c, d, points, colors, cyl_vertices) 
{
    // We need to parition the quad into two triangles in order for
    // WebGL to be able to render it.  In this case, we create two
    // triangles from the quad indices

    //vertex color assigned by the index of the vertex

    var indices = [ a, b, c, a, c, d ];
    var democolors = [ [1, 0, 0, 1], [0.8, 0.8, 0.8, 1], [0.5, 0.5, 0.5, 1], [0.8, 0.8, 0.8, 1], [0.8, 0.9, 0.8, 1], [0.6, 0.6, 0.6, 1] ];

    for ( var i = 0; i < indices.length; ++i ) {
        points.push( cyl_vertices[indices[i]] );
        colors.push( democolors[i] );
    }
}
