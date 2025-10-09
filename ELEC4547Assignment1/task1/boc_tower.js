//
// create the 2D base triangle by specifying the three vertices in homogeneous coordinates
//
var createBaseTriangleVertices = function () {
    var baseTriangleVertices = [
        // homogeneous coordinates (x, y, w), where w = 1.0 for 2D points
        vec3.fromValues( 0.0, 0.0, 1.0 ), // first vertex
        vec3.fromValues( -1.0, 0.0, 1.0 ), // second vertex
        vec3.fromValues( -0.5, Math.sqrt(3)/2.0, 1.0 ) // third vertex
    ];
    return baseTriangleVertices;
}

//
// transform all three vertices of a triangle by mTrans
//
var transformTriangleVertices = function (triangleVertices, mTrans) {
    for (var i = 0; i < triangleVertices.length; i++) {
        vec3.transformMat3(triangleVertices[i], triangleVertices[i], mTrans);
    }
}

//
// convert triangle vertices (in vec3) to a list of vertices
//
var convertToList = function (triangleVertices) {
    var triangleVerticesList = [];
    for (var i = 0; i < triangleVertices.length; i++) {
        // only need two (x, y), the third is just 1, no need to include it
        triangleVerticesList.push(triangleVertices[i][0]);
        triangleVerticesList.push(triangleVertices[i][1]);
    }
    return triangleVerticesList;
}

//
// Task 1 starts from here
// ToDo: 1. create 22 triangles by calling function createBaseTriangleVertices();
//       2. create transformation matrix for each triangle by using mat3.fromValues();
//          You can form the transformation matrix by matrix multiplication of translation, rotation, scaling and shearing matrices.
//       3. transform each triangle by using transformTriangleVertices();
//       4. concatenate all the triangles into a single list by using convertToList() for webgl to render; (already done for you)
//

//create triangle list
var triangleList = [];

//
// create first triangle (base triangle, no transformation)
//
triangleList.push(createBaseTriangleVertices());
var vTrans = vec2.fromValues(0, 8); // x and y
var mTrans = mat3.fromValues(1, 0, 0, 0, 1, 0, vTrans[0], vTrans[1], 1);

var angle = 30.0 / 180.0 * Math.PI; // 30 degree
var mRot = mat3.fromValues(Math.cos(angle), -Math.sin(angle), 0, Math.sin(angle), Math.cos(angle), 0, 0, 0, 1);

var mTransRot = mat3.create(); // create a new identity matrix
mat3.multiply(mTransRot, mTrans, mRot); //mTransRot = mTrans * mRot
transformTriangleVertices(triangleList[0], mTransRot);

// create second triangle
triangleList.push(createBaseTriangleVertices());
var vTrans = vec2.fromValues(-1, 7.5);
var mTrans = mat3.fromValues(1, 0, 0, 0, 1, 0, vTrans[0], vTrans[1], 1);

var angle = 90.0 / 180.0 * Math.PI;
var mRot = mat3.fromValues(Math.cos(angle), -Math.sin(angle), 0, Math.sin(angle), Math.cos(angle), 0, 0, 0, 1);

var mTransRot = mat3.create(); // create a new identity matrix
mat3.multiply(mTransRot, mTrans, mRot); //mTransRot = mTrans * mRot
transformTriangleVertices(triangleList[1], mTransRot);

// create third triangle
triangleList.push(createBaseTriangleVertices());
var vTrans = vec2.fromValues(0, 7);
var mTrans = mat3.fromValues(1, 0, 0, 0, 1, 0, vTrans[0], vTrans[1], 1);

var angle = 30.0 / 180.0 * Math.PI;
var mRot = mat3.fromValues(Math.cos(angle), -Math.sin(angle), 0, Math.sin(angle), Math.cos(angle), 0, 0, 0, 1);

var mTransRot = mat3.create(); // create a new identity matrix
mat3.multiply(mTransRot, mTrans, mRot); //mTransRot = mTrans * mRot
transformTriangleVertices(triangleList[2], mTransRot);

// create fourth triangle
triangleList.push(createBaseTriangleVertices());
var vTrans = vec2.fromValues(-1, 6.5);
var mTrans = mat3.fromValues(1, 0, 0, 0, 1, 0, vTrans[0], vTrans[1], 1);

var angle = 90.0 / 180.0 * Math.PI;
var mRot = mat3.fromValues(Math.cos(angle), -Math.sin(angle), 0, Math.sin(angle), Math.cos(angle), 0, 0, 0, 1);

var mTransRot = mat3.create(); // create a new identity matrix
mat3.multiply(mTransRot, mTrans, mRot); //mTransRot = mTrans * mRot
transformTriangleVertices(triangleList[3], mTransRot);

// create fifth triangle
triangleList.push(createBaseTriangleVertices());
var vTrans = vec2.fromValues(0, 6);
var mTrans = mat3.fromValues(1, 0, 0, 0, 1, 0, vTrans[0], vTrans[1], 1);

var angle = 90.0 / 180.0 * Math.PI;
var mRot = mat3.fromValues(Math.cos(angle), -Math.sin(angle), 0, Math.sin(angle), Math.cos(angle), 0, 0, 0, 1);

var mTransRot = mat3.create(); // create a new identity matrix
mat3.multiply(mTransRot, mTrans, mRot); //mTransRot = mTrans * mRot
transformTriangleVertices(triangleList[4], mTransRot);

// create sixth triangle
triangleList.push(createBaseTriangleVertices());
var vTrans = vec2.fromValues(0, 6);
var mTrans = mat3.fromValues(1, 0, 0, 0, 1, 0, vTrans[0], vTrans[1], 1);

var angle = 30.0 / 180.0 * Math.PI;
var mRot = mat3.fromValues(Math.cos(angle), -Math.sin(angle), 0, Math.sin(angle), Math.cos(angle), 0, 0, 0, 1);

var mTransRot = mat3.create(); // create a new identity matrix
mat3.multiply(mTransRot, mTrans, mRot); //mTransRot = mTrans * mRot
transformTriangleVertices(triangleList[5], mTransRot);


// create seventh triangle
triangleList.push(createBaseTriangleVertices());
var vTrans = vec2.fromValues(1, 5.5);
var mTrans = mat3.fromValues(1, 0, 0, 0, 1, 0, vTrans[0], vTrans[1], 1);

var angle = 30.0 / 180.0 * Math.PI;
var mRot = mat3.fromValues(Math.cos(angle), -Math.sin(angle), 0, Math.sin(angle), Math.cos(angle), 0, 0, 0, 1);

var mTransRot = mat3.create(); // create a new identity matrix
mat3.multiply(mTransRot, mTrans, mRot); //mTransRot = mTrans * mRot
transformTriangleVertices(triangleList[6], mTransRot);

// create eighth triangle
triangleList.push(createBaseTriangleVertices());
var vTrans = vec2.fromValues(-1, 5.5);
var mTrans = mat3.fromValues(1, 0, 0, 0, 1, 0, vTrans[0], vTrans[1], 1);

var angle = 90.0 / 180.0 * Math.PI;
var mRot = mat3.fromValues(Math.cos(angle), -Math.sin(angle), 0, Math.sin(angle), Math.cos(angle), 0, 0, 0, 1);

var mTransRot = mat3.create(); // create a new identity matrix
mat3.multiply(mTransRot, mTrans, mRot); //mTransRot = mTrans * mRot
transformTriangleVertices(triangleList[7], mTransRot);

// create nineth triangle
triangleList.push(createBaseTriangleVertices());
var vTrans = vec2.fromValues(0, 5.0);
var mTrans = mat3.fromValues(1, 0, 0, 0, 1, 0, vTrans[0], vTrans[1], 1);

var angle = 90.0 / 180.0 * Math.PI;
var mRot = mat3.fromValues(Math.cos(angle), -Math.sin(angle), 0, Math.sin(angle), Math.cos(angle), 0, 0, 0, 1);

var mTransRot = mat3.create(); // create a new identity matrix
mat3.multiply(mTransRot, mTrans, mRot); //mTransRot = mTrans * mRot
transformTriangleVertices(triangleList[8], mTransRot);

// create tenth triangle
triangleList.push(createBaseTriangleVertices());
var vTrans = vec2.fromValues(0, 5.0);
var mTrans = mat3.fromValues(1, 0, 0, 0, 1, 0, vTrans[0], vTrans[1], 1);

var angle = 30.0 / 180.0 * Math.PI;
var mRot = mat3.fromValues(Math.cos(angle), -Math.sin(angle), 0, Math.sin(angle), Math.cos(angle), 0, 0, 0, 1);

var mTransRot = mat3.create(); // create a new identity matrix
mat3.multiply(mTransRot, mTrans, mRot); //mTransRot = mTrans * mRot
transformTriangleVertices(triangleList[9], mTransRot);

// create eleventh triangle
triangleList.push(createBaseTriangleVertices());
var vTrans = vec2.fromValues(1, 4.5);
var mTrans = mat3.fromValues(1, 0, 0, 0, 1, 0, vTrans[0], vTrans[1], 1);

var angle = 30.0 / 180.0 * Math.PI;
var mRot = mat3.fromValues(Math.cos(angle), -Math.sin(angle), 0, Math.sin(angle), Math.cos(angle), 0, 0, 0, 1);

var mTransRot = mat3.create(); // create a new identity matrix
mat3.multiply(mTransRot, mTrans, mRot); //mTransRot = mTrans * mRot
transformTriangleVertices(triangleList[10], mTransRot);

// create twelfth triangle
triangleList.push(createBaseTriangleVertices());
var vTrans = vec2.fromValues(-1, 4.5);
var mTrans = mat3.fromValues(1, 0, 0, 0, 1, 0, vTrans[0], vTrans[1], 1);

var angle = 90.0 / 180.0 * Math.PI;
var mRot = mat3.fromValues(Math.cos(angle), -Math.sin(angle), 0, Math.sin(angle), Math.cos(angle), 0, 0, 0, 1);

var mTransRot = mat3.create(); // create a new identity matrix
mat3.multiply(mTransRot, mTrans, mRot); //mTransRot = mTrans * mRot
transformTriangleVertices(triangleList[11], mTransRot);

// create thirteenth triangle
triangleList.push(createBaseTriangleVertices());
var vTrans = vec2.fromValues(0, 4.0);
var mTrans = mat3.fromValues(1, 0, 0, 0, 1, 0, vTrans[0], vTrans[1], 1);

var angle = 90.0 / 180.0 * Math.PI;
var mRot = mat3.fromValues(Math.cos(angle), -Math.sin(angle), 0, Math.sin(angle), Math.cos(angle), 0, 0, 0, 1);

var mTransRot = mat3.create(); // create a new identity matrix
mat3.multiply(mTransRot, mTrans, mRot); //mTransRot = mTrans * mRot
transformTriangleVertices(triangleList[12], mTransRot);

// create fourteenth triangle
triangleList.push(createBaseTriangleVertices());
var vTrans = vec2.fromValues(0, 4.0);
var mTrans = mat3.fromValues(1, 0, 0, 0, 1, 0, vTrans[0], vTrans[1], 1);

var angle = 30.0 / 180.0 * Math.PI;
var mRot = mat3.fromValues(Math.cos(angle), -Math.sin(angle), 0, Math.sin(angle), Math.cos(angle), 0, 0, 0, 1);

var mTransRot = mat3.create(); // create a new identity matrix
mat3.multiply(mTransRot, mTrans, mRot); //mTransRot = mTrans * mRot
transformTriangleVertices(triangleList[13], mTransRot);

// create fifteenth triangle
triangleList.push(createBaseTriangleVertices());
var vTrans = vec2.fromValues(1, 3.5);
var mTrans = mat3.fromValues(1, 0, 0, 0, 1, 0, vTrans[0], vTrans[1], 1);

var angle = 30.0 / 180.0 * Math.PI;
var mRot = mat3.fromValues(Math.cos(angle), -Math.sin(angle), 0, Math.sin(angle), Math.cos(angle), 0, 0, 0, 1);

var mTransRot = mat3.create(); // create a new identity matrix
mat3.multiply(mTransRot, mTrans, mRot); //mTransRot = mTrans * mRot
transformTriangleVertices(triangleList[14], mTransRot);

// create sixteenth triangle
triangleList.push(createBaseTriangleVertices());
var vTrans = vec2.fromValues(-1, 3.5);
var mTrans = mat3.fromValues(1, 0, 0, 0, 1, 0, vTrans[0], vTrans[1], 1);

var angle = 90.0 / 180.0 * Math.PI;
var mRot = mat3.fromValues(Math.cos(angle), -Math.sin(angle), 0, Math.sin(angle), Math.cos(angle), 0, 0, 0, 1);

var mTransRot = mat3.create(); // create a new identity matrix
mat3.multiply(mTransRot, mTrans, mRot); //mTransRot = mTrans * mRot
transformTriangleVertices(triangleList[15], mTransRot);


// create seventeenth triangle
triangleList.push(createBaseTriangleVertices());
var vTrans = vec2.fromValues(0, 3.3);
var mTrans = mat3.fromValues(1, 0, 0, 0, 1, 0, vTrans[0], vTrans[1], 1);

var angle = 90.0 / 180.0 * Math.PI;
var mRot = mat3.fromValues(Math.cos(angle), -Math.sin(angle), 0, Math.sin(angle), Math.cos(angle), 0, 0, 0, 1);

// for scaling
var mScale = mat3.fromValues(2/3, 0, 0, 0, 1, 0, 0, 0, 1);

// for shearing
var mShear = mat3.fromValues(1, 0, 0, 0.2, 1, 0, 0, 0, 1);

var mFinal = mat3.create(); // create a new identity matrix
mat3.multiply(mFinal, mTrans, mRot);
mat3.multiply(mFinal, mFinal, mScale); //mFinal = mTrans * mRot * mScale
mat3.multiply(mFinal, mFinal, mShear); //mFinal = mTrans * mRot * mScale * mShear
transformTriangleVertices(triangleList[16], mFinal);


// create eighteenth triangle
triangleList.push(createBaseTriangleVertices());
var vTrans = vec2.fromValues(0, 3.3);
var mTrans = mat3.fromValues(1, 0, 0, 0, 1, 0, vTrans[0], vTrans[1], 1);

var angle = 90.0 / 180.0 * Math.PI;
var mRot = mat3.fromValues(Math.cos(angle), -Math.sin(angle), 0, Math.sin(angle), Math.cos(angle), 0, 0, 0, 1);

// for scaling
var mScale = mat3.fromValues(2/3, 0, 0, 0, 1, 0, 0, 0, 1);

// for shearing
var mShear = mat3.fromValues(1, 0, 0, -0.2, 1, 0, 0, 0, 1);

//symmetric
var mReflectX = mat3.fromValues(1, 0, 0, 0, -1, 0, 0, 0, 1);

var mFinal = mat3.create(); // create a new identity matrix
mat3.multiply(mFinal, mTrans, mRot);
mat3.multiply(mFinal, mFinal, mScale);
mat3.multiply(mFinal, mFinal, mShear);
mat3.multiply(mFinal, mFinal, mReflectX); // symmetric
transformTriangleVertices(triangleList[17], mFinal);

// create nineteenth triangle
triangleList.push(createBaseTriangleVertices());
var vTrans = vec2.fromValues(1, 3.1);
var mTrans = mat3.fromValues(1, 0, 0, 0, 1/3, 0, vTrans[0], vTrans[1], 1);

var angle = 30.0 / 180.0 * Math.PI;
var mRot = mat3.fromValues(Math.cos(angle), -Math.sin(angle), 0, Math.sin(angle), Math.cos(angle), 0, 0, 0, 1);

var mTransRot = mat3.create(); // create a new identity matrix
mat3.multiply(mTransRot, mTrans, mRot); //mTransRot = mTrans * mRot
transformTriangleVertices(triangleList[18], mTransRot);

// create twentieth triangle
triangleList.push(createBaseTriangleVertices());
var vTrans = vec2.fromValues(-1, 3.1);
var mTrans = mat3.fromValues(1, 0, 0, 0, 1/3, 0, vTrans[0], vTrans[1], 1);

var angle = 90.0 / 180.0 * Math.PI;
var mRot = mat3.fromValues(Math.cos(angle), -Math.sin(angle), 0, Math.sin(angle), Math.cos(angle), 0, 0, 0, 1);

var mTransRot = mat3.create(); // create a new identity matrix
mat3.multiply(mTransRot, mTrans, mRot); //mTransRot = mTrans * mRot
transformTriangleVertices(triangleList[19], mTransRot);


// create twentyfirst triangle
triangleList.push(createBaseTriangleVertices());
var vTrans = vec2.fromValues(0, 2.95);
var mTrans = mat3.fromValues(1, -0.15, 0, 0, 1/3, 0, vTrans[0], vTrans[1], 1);

var angle = 90.0 / 180.0 * Math.PI;
var mRot = mat3.fromValues(Math.cos(angle), -Math.sin(angle), 0, Math.sin(angle), Math.cos(angle), 0, 0, 0, 1);

var mTransRot = mat3.create(); // create a new identity matrix
mat3.multiply(mTransRot, mTrans, mRot); //mTransRot = mTrans * mRot
transformTriangleVertices(triangleList[20], mTransRot);


// create twentysecond triangle
triangleList.push(createBaseTriangleVertices());
var vTrans = vec2.fromValues(0, 2.95);
var mTrans = mat3.fromValues(1, 0.15, 0, 0, 1/3, 0, vTrans[0], vTrans[1], 1);

var angle = 30.0 / 180.0 * Math.PI;
var mRot = mat3.fromValues(Math.cos(angle), -Math.sin(angle), 0, Math.sin(angle), Math.cos(angle), 0, 0, 0, 1);

var mTransRot = mat3.create(); // create a new identity matrix
mat3.multiply(mTransRot, mTrans, mRot); //mTransRot = mTrans * mRot
transformTriangleVertices(triangleList[21], mTransRot);


// convert triangleList to 1d array for webgl to render
triangleList = triangleList.map(convertToList);
triangleList = triangleList.reduce(function(a, b) {
    return a.concat(b);
}, []);