var gl;

//
// Load extra files (shaders, models, etc.)
//
var InitDemo = function () {
    var defaultVertexShaderText;
    var defaultFragmentShaderText;
    var gouraudVertexShaderText;
    var gouraudFragmentShaderText;
    var phongVertexShaderText;
    var phongFragmentShaderText;
    var modelTeapot;

    //
    // load shader text
    //
    // default shaders
    defaultVertexShaderText = loadShaderText('/shader/shader_vertex_default.glsl');
    defaultFragmentShaderText = loadShaderText('/shader/shader_fragment_default.glsl');
    // gouraud shaders
    gouraudVertexShaderText = loadShaderText('/shader/shader_vertex_gouraud.glsl');
    gouraudFragmentShaderText = loadShaderText('/shader/shader_fragment_gouraud.glsl');
    // phong shaders
    phongVertexShaderText = loadShaderText('/shader/shader_vertex_phong.glsl');
    phongFragmentShaderText = loadShaderText('/shader/shader_fragment_phong.glsl');

    //
    // load model
    //
    loadJSONResource('/teapot.json', function(modelErr, modelObj) {
        if (modelErr) {
            alert('Fatal error getting model (see console)');
            console.error(modelErr);
        } else {
            modelTeapot = modelObj;
        }
    })

    RunDemo(modelTeapot,
            defaultVertexShaderText, defaultFragmentShaderText,
            gouraudVertexShaderText, gouraudFragmentShaderText, 
            phongVertexShaderText, phongFragmentShaderText);
}

//
// Run demo
//
var RunDemo = function (model,
                        defaultVertexShaderText, defaultFragmentShaderText,
                        gouraudVertexShaderText, gouraudFragmentShaderText, 
                        phongVertexShaderText, phongFragmentShaderText) {

    var canvas = document.getElementById('demo-surface');
    gl = canvas.getContext('webgl');

    //
    // Check WebGL compatibility
    //
    if (!gl) {
        console.log('WebGL not supported, falling back on experimental-webgl');
        gl = canvas.getContext('experimental-webgl');
    }
    if (!gl) {
        alert('Your browser does not support WebGL');
    }

    //
    // Enable depth test (try commenting this line and see what happens)
    //
    gl.enable(gl.DEPTH_TEST);

    //
    // Create shader program (see utils.js)
    //
    var programDefault = getShaderProgram(gl, defaultVertexShaderText, defaultFragmentShaderText, 'default');
    var programGrouaud = getShaderProgram(gl, gouraudVertexShaderText, gouraudFragmentShaderText, 'gouraud');
    var programPhong = getShaderProgram(gl, phongVertexShaderText, phongFragmentShaderText, 'phong');

    //
    // Main render loop
    //   
    var angle = 0;
    var loop = function () {
        // Clear canvas
        gl.clearColor(0.75, 0.85, 0.8, 1.0);
        gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
        
        //
        // Render three teapot
        // Left one: default shader
        // Middle one: gouraud shader
        // Right one: phong shader
        //
        render_teapot(gl, model, programDefault, angle, 10);
        render_teapot(gl, model, programGrouaud, angle, 0);
        render_teapot(gl, model, programPhong, angle, -10);

        // enter another loop
        angle += 1;
        requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
}