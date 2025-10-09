precision mediump float;
attribute vec3 vertPosition;
attribute vec3 vertNormal;

varying vec3 fragNormal;
varying vec3 vertPos;

uniform mat4 mModel;
uniform mat4 mView;
uniform mat4 mProj;

void main()
{
   fragNormal = (mModel * vec4(vertNormal, 0.0)).xyz;
   vertPos = (mModel * vec4(vertPosition, 1.0)).xyz;
   gl_Position = mProj * mView * mModel * vec4(vertPosition, 1.0);
}