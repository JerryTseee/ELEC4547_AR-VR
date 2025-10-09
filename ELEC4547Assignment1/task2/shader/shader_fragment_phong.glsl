precision mediump float;

struct lightSource
{
   float Ka; // Ambient reflection coefficient
   float Kd; // Diffuse reflection coefficient
   float Ks; // Specular reflection coefficient
   float shininessVal; // Shininess
   vec3 ambientColor;
   vec3 diffuseColor;
   vec3 specularColor;
   vec3 lightPos; // Spot Light position
};

varying vec3 fragNormal;
varying vec3 vertPos;
uniform lightSource light;
uniform vec3 cameraPos;

void main()
{
   // Your code start from here...

   vec3 n = normalize(fragNormal); // fragment normal/perpendicular
   vec3 l = normalize(light.lightPos - vertPos); // from fragment to light source
   vec3 v = normalize(cameraPos - vertPos); // from fragment to camera (eye)
   vec3 r = reflect(-l, n); // reflection vector

   // diffuse
   vec3 diffuse = light.Kd * max(dot(n, l), 0.0) * light.diffuseColor;

   // specular (phong specular model, so we use v, and r) -> nh = vr, since their angles are equal
   vec3 specular = light.Ks * pow(max(dot(v, r), 0.0), light.shininessVal) * light.specularColor;

   // ambient
   vec3 ambient = light.Ka * light.ambientColor;

   // result
   vec3 result = ambient + diffuse + specular;

   gl_FragColor = vec4(result, 1.0);
}


