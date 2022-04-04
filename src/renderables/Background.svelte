<script>
      import { renderable } from '../renderable.js';
      
      renderable((props) => {
            const {ctx, width, height} = props;
            ctx.clearRect(0, 0, width, height);
            const gradient = ctx.createLinearGradient(0, 0, width, 0);
            gradient.addColorStop(0, "#ce4a5d");
            gradient.addColorStop(1, "#6378ff");
            
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
      });
</script>

<slot></slot>