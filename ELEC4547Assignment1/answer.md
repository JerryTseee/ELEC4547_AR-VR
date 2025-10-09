Question 1:
mat4.multiply(modelMatrix, rotate, modelMatrix);
mat4.multiply(modelMatrix, translate, modelMatrix);

Explanation:
because the order is important! At the beginning, the teapost is in the center origin. When we do the rotate first, it will do the rotation around center, then translation, so all three teapots will rotate in its own center. In other case, it will do the translation first and then rotate, three teapots will align to the origin center of the image and rotate.

order1: apply the rotation first, then translation, each individual teapot will rotate around its own center.
order2: apply the translation first, then rotation, all teapots will rotate around the world origin.




Question 2:
Gouraud shading is per-vertex shading, it computes at the vertices and then linearly interpolates across the fragments. Its computation cost will be lower and it is faster. But the result is not as good as the Phong shading, the quality is not very good, the specular highlights is not very natural.

Phong shading is per-fragment shading, surface colors are interpolated across the polygon from the vertex normals. Lightning for each individual fragment/pixel. Its computation cost will be higher and it is slower. But the result quality is better and smoother, it is more natural and accurate.