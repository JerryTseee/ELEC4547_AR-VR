precision mediump float;
attribute vec3 vertPosition;

varying vec3 fragColor;
uniform mat4 mModel;
uniform mat4 mView;
uniform mat4 mProj;

void main()
{  
   fragColor = vec3(0.8, 0.5, 0.5);
   gl_Position = mProj * mView * mModel * vec4(vertPosition, 1.0);
}