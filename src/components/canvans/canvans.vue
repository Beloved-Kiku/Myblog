<template>
        <div ref="container" class="container">
            <canvas id="canvas" ref="canvas" />
        </div>

</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

/**
 * 星星对象
 */
interface Star {
    orbitRadius: number;
    radius: number; //星星大小
    orbitX: number;
    orbitY: number;
    timePassed: number;
    speed: number; //星星移动速度
    alpha: number;
}

const container = ref<HTMLElement>();
const canvas = ref<HTMLCanvasElement>();
const ctx = ref<CanvasRenderingContext2D>();

const w = ref<number | undefined>(1000);
const h = ref<number | undefined>(800);
const hue = 217,
    stars = ref<Star[]>([]),
    maxStars = 1300;

const canvas2 = ref<HTMLCanvasElement>();
const ctx2 = ref<CanvasRenderingContext2D>();

const half = ref<number>(0);
const gradient2 = ref<any>();


const random = (min: number, max?: number) => {
    if (!max) {
        max = min;
        min = 0;
    }

    if (min > max) {
        let hold = max;
        max = min;
        min = hold;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * 计算星星移动范围
 * @param x
 * @param y
 */
const maxOrbit = (x: number, y: number) => {
    const max = Math.max(x, y),
        diameter = Math.round(Math.sqrt(max * max + max * max));
    return diameter / 2;
    //星星移动范围，值越大范围越小，
};

/**
 * 绘制星星
 */
const drawStar = (ctx: CanvasRenderingContext2D, star: Star) => {
    const x = Math.sin(star.timePassed) * star.orbitRadius + star.orbitX,
        y = Math.cos(star.timePassed) * star.orbitRadius + star.orbitY,
        twinkle = random(10);

    if (twinkle === 1 && star.alpha > 0) {
        star.alpha -= 0.05;
    } else if (twinkle === 2 && star.alpha < 1) {
        star.alpha += 0.05;
    }

    ctx.globalAlpha = star.alpha;
    ctx.drawImage(canvas2.value!, x - star.radius / 2, y - star.radius / 2, star.radius, star.radius);
    star.timePassed += star.speed;
};

/**
 * 星星的旋转动画
 */
const animation = () => {
    ctx.value!.globalCompositeOperation = 'source-over';
    ctx.value!.globalAlpha = 0.5; //尾巴
    ctx.value!.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)';
    ctx.value!.fillRect(0, 0, w.value!, h.value!);

    ctx.value!.globalCompositeOperation = 'lighter';
    for (let i = 1, l = stars.value.length; i < l; i++) {
        drawStar(ctx.value!, stars.value[i]);
    }

    window.requestAnimationFrame(animation);
};

/**
 * 产生星星
 */
const generateStar = () => {
    const orbitRadius = random(maxOrbit(w.value!, h.value!));
    // 星星大小
    const radius = random(60, orbitRadius) / 8;
    const orbitX = w.value! / 2;
    const orbitY = h.value! / 2;
    const timePassed = random(0, maxStars);
    // 星星移动速度
    const speed = random(orbitRadius) / 50000;
    const alpha = random(2, 10) / 10;
    const star: Star = {
        orbitX,
        orbitY,
        orbitRadius,
        radius,
        timePassed,
        speed,
        alpha
    };
    return star;
};

/**
 * 初始化星星的数量
 */
const initStar = () => {
    ctx.value = canvas.value!.getContext('2d') as CanvasRenderingContext2D;
    w.value = container.value?.clientWidth;
    h.value = container.value?.clientHeight;
    canvas.value!.width = container.value?.clientWidth || 1000;
    canvas.value!.height = container.value?.clientHeight || 800;
    canvas2.value = document.createElement('canvas');
    ctx2.value = canvas2.value!.getContext('2d') as CanvasRenderingContext2D;
    canvas2.value.width = 100;
    canvas2.value.height = 100;
    half.value = canvas2.value!.width / 2;
    gradient2.value = ctx2.value!.createRadialGradient(half.value, half.value, 0, half.value, half.value, half.value);
    gradient2.value.addColorStop(0.025, '#CCC');
    gradient2.value.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
    gradient2.value.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
    gradient2.value.addColorStop(1, 'transparent');
    ctx2.value!.fillStyle = gradient2.value;
    ctx2.value!.beginPath();
    ctx2.value!.arc(half.value, half.value, half.value, 0, Math.PI * 2);
    ctx2.value!.fill();
    for (let i = 0; i < maxStars; i++) {
        const star = generateStar();
        stars.value.push(star);
    }
};

onMounted(() => {
    initStar();
    animation();
});


</script>
<style scoped>
.container {
    width: 100vw;
    height: 100vh;
    position: absolute;
    overflow: hidden;
}
#canvas {
    width: 100%;
    height: 100%;
}
</style>