var canvas;
var gl;

var NumSides = 12;

// flattened points and colors to be sent to Vertex Shader
var points = [];
var colors = [];

// rotation stuff
var theta = [ 0, 0, 0 ];

var thetaLoc;                   // rotation uniform

window.onload = function init()
{
    canvas = document.getElementById( "gl-canvas" );
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }

    colorCylinder();

    var left = (canvas.width-canvas.height)/2;
    gl.viewport( left, 0, canvas.height, canvas.height );
    gl.clearColor( 0.2, 0.2, 0.2, 1.0 );

    gl.enable(gl.DEPTH_TEST);

    //
    //  Load shaders and initialize attribute buffers
    //
    var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );

    var cBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, cBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(colors), gl.STATIC_DRAW );

    var vColor = gl.getAttribLocation( program, "vColor" );
    gl.vertexAttribPointer( vColor, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vColor );

    var vBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(points), gl.STATIC_DRAW );

    var vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 3, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );

    thetaLoc = gl.getUniformLocation(program, "theta"); 

    render();
}

var cyl_vertices, cyl_colors;
function buildVertices() {
    var x, z;
    var angle = 0;
    var inc = Math.PI * 2.0 / NumSides;

    cyl_vertices = new Array(NumSides * 2);
    cyl_colors   = new Array(NumSides * 2);

    alt_colors = [[1.0, 0.5, 0.5, 1.0], [0.5, 1.0, 0.5, 1.0], [0.5, 0.5, 1.0, 1.0]];

    for(var i_side = 0; i_side < NumSides; i_side++) {
        x = 0.5 * Math.cos(angle);
        z = 0.5 * Math.sin(angle);

        cyl_vertices[i_side] = vec3(x, 0.5, z);
        cyl_colors[i_side] = alt_colors[i_side%3];

        cyl_vertices[i_side+NumSides] = vec3(x, -0.5, z);
        cyl_colors[i_side+NumSides] = alt_colors[i_side%3];

        angle += inc;
    }
}

function colorCylinder()
{
    buildVertices();

    for(var i_side = 0; i_side < NumSides-1; i_side++) {
        quad(i_side+1, i_side, NumSides+i_side, NumSides+i_side+1);
    }
    quad(0, NumSides-1, 2*NumSides-1, NumSides);
}

function quad(a, b, c, d) 
{
    // We need to parition the quad into two triangles in order for
    // WebGL to be able to render it.  In this case, we create two
    // triangles from the quad indices

    //vertex color assigned by the index of the vertex

    var indices = [ a, b, c, a, c, d ];
    var democolors = [ [0,0,0,1], [0,0,0,1], [0,0,0,1], [0,0,0,1], [0,0,0,1], [0,0,0,1] ];

    for ( var i = 0; i < indices.length; ++i ) {
        points.push( cyl_vertices[indices[i]] );
        //colors.push( cyl_colors[indices[i]] );
        colors.push( democolors[i] );
    }
}

function render()
{
    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    theta[0] += 0.2;
    gl.uniform3fv(thetaLoc, theta);

    gl.drawArrays( gl.TRIANGLES, 0, 6 * NumSides );

    requestAnimFrame( render );
}
