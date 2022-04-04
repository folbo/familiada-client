<script>
    import { renderable } from '../renderable.js';
    
    export let activeSide = null;
    
    let height;
    let width;
    let x;
    let y;
    
    renderable((props) => {
        const {ctx} = props;
        
        width = props.width / 5;
        height = width * 2.2
        
        if (height > props.height * 0.7) {
            height = props.height * 0.7;
            width = height / 2.2
        }
        
        // position stage in center
        x = props.width / 2 - width / 2;
        y = props.height - height - 80;
        const thickness = {
            x: 0.24 * width,
            y: 0.12 * height
        };
        
        ctx.save();
        
        scene(ctx, props.width, props.height);
        
        shape(ctx, x, y, width, height, thickness);
        
        playerBar(
            ctx, 
            x + width / 50, 
            y + height * 0.24, 
            width / 5 - width / 10, 
            height * 0.52, 
            activeSide === 'left' ? 'hsl(3.11, 100%, 40%)' : 'hsl(3.11, 80%, 20%)');
        playerBar(
            ctx, 
            x + width - width / 8, 
            y + height * 0.24, 
            width / 5 - width / 10, 
            height * 0.52, 
            activeSide === 'right' ? 'hsl(210, 100%, 57%)' : 'hsl(210, 80%, 30%)');
        
        ctx.restore();
    });
    
    function playerBar(ctx, x, y, width, height, color) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
    }
    
    function scene(ctx, width, height) {
        ctx.beginPath();
        ctx.arc(width/2, height+width*1.2, width*1.34, -Math.PI/3, Math.PI*4/3, true);
        ctx.strokeStyle= "#000000";
        ctx.closePath();
        ctx.stroke();
        
        const gradient = ctx.createLinearGradient(0, height-74, 0, height);
        gradient.addColorStop(0, "#9f9f9f");
        gradient.addColorStop(1, "#fafafa");
        ctx.fillStyle=gradient;
        ctx.fill();
    }
    
    function shape(ctx, x, y, width, height, thickness) {
        const r = width / 2;

        const topCenter = {x: x + r, y: y + r};
        const bottomCenter = {x: x + r, y: y + height - r};
        
        ctx.beginPath();
        
        ctx.arc(topCenter.x, topCenter.y, r, Math.PI, 0, false);
        ctx.arc(bottomCenter.x, bottomCenter.y, r, 0, Math.PI, false);
        ctx.moveTo(topCenter.x + r - thickness.x, topCenter.y)
        ctx.arc(topCenter.x, topCenter.y + thickness.y, r - thickness.x, 0, Math.PI, true);
        ctx.arc(bottomCenter.x, bottomCenter.y - thickness.y, r - thickness.x, Math.PI, 0, true);
        
        const gradient = ctx.createLinearGradient(0, y, 0, y + height);
        gradient.addColorStop(0, "#fefefe");
        gradient.addColorStop(1, "#afafaf");
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // semi-transparent window
        ctx.beginPath();
        ctx.arc(topCenter.x, topCenter.y + thickness.y, r - thickness.x, 0, Math.PI, true);
        ctx.arc(bottomCenter.x, bottomCenter.y - thickness.y, r - thickness.x, Math.PI, 0, true);
        ctx.closePath();
        ctx.fillStyle="#acacaca0";
        ctx.fill();
        
        // rainbow border
        const strokeGradient = ctx.createLinearGradient(x, 0, x + width, 0);
        strokeGradient.addColorStop(0, "#ff0699");
        strokeGradient.addColorStop(1, "#5255ff");
        ctx.lineWidth = 12.2;
        ctx.strokeStyle = strokeGradient;
        ctx.stroke();
    }
</script>

<slot />