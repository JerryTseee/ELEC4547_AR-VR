precision mediump float;
struct lightSource
{
   float Ka;   // Ambient reflection coefficient
   float Kd;   // Diffuse reflection coefficient
   float Ks;   // Specular reflection coefficient
   float shininessVal; // Shininess
   // Material color
   vec3 ambientColor;
   vec3 diffuseColor;
   vec3 specularColor;
   vec3 lightPos; // Light position in 3d space
};

attribute vec3 vertPosition; // 3d position of each vertex
attribute vec2 vertTexCoord; // 2d vector for texture coord
attribute vec3 vertNormal; // 3d vector representing normal/perpendicular position at each vertex

uniform mat4 mModel; // model matrix: transform vertex from object space to world space
uniform mat4 mView; // view matrix: transform from world space to camera/eye space
uniform mat4 mProj; // projection matrix

uniform lightSource light;
uniform vec3 cameraPos;
varying vec4 color; //color

void main()
{
   gl_Position = mProj * mView * mModel * vec4(vertPosition, 1.0); // final position of vertex

   // Your code start from here...

   mat4 modelView = mView * mModel; // transform to view space directly
   vec4 viewPos = modelView * vec4(vertPosition, 1.0); // vertex position in view space

   // surface normal N
   vec3 N = normalize(mat3(modelView) * vertNormal); // normalize ensure has unit length

   vec4 lightPos_view = mView * vec4(light.lightPos, 1.0); // transform to view space
   // normalized vector pointing to light source L
   vec3 L = normalize(lightPos_view.xyz - viewPos.xyz);

   // normalized vector pointing to viewer V, so add negative
   vec3 V = normalize(-viewPos.xyz);

   // reflected light vector R
   vec3 R = reflect(-L, N);

   // ambient
   vec3 ambient = light.Ka * light.ambientColor;

   // diffuse
   vec3 diffuse = light.Kd * light.diffuseColor * max(0.0, dot(N, L));

   // specular (phong specular model!!!)
   vec3 specular = light.Ks * light.specularColor * pow(max(0.0, dot(R, V)), light.shininessVal);

   // all!
   color = vec4(ambient+diffuse+specular, 1.0); // let it become 4 value vector
}


