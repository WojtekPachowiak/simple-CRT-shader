void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    float PI = 3.14;
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord/iResolution.xy;
    vec2 mouse = iMouse.xy/iResolution.xy;
    float controler = mod(iTime,1.);
    
    float trough_height = 0.9;
    float scaleFactor = (1.-sin(controler *PI)) * (1.-trough_height)+trough_height;
    vec2 s_uv = uv -0.5;
    s_uv*=scaleFactor;
    s_uv += 0.5;
    
    
    
    vec4 img1 = texture(iChannel0, uv);
    vec4 img2 = texture(iChannel0, s_uv);
    //img3 = texture(iChannel0, uv);
    
    vec4 col = mix(img1,img2,controler);
    
    fragColor =col;
}
