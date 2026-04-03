import React, { useState, useEffect } from "react";
import { Box, Text, Group, Stack, Divider, UnstyledButton, Center, Flex } from "@mantine/core";
import {
  IconBrandQq,
  IconBrandGoogle,
  IconLogin,
  IconUserKey,
  IconBrandApple,
} from "@tabler/icons-react";

// 文案及其对应的主题色
const THEMES = [
  {
    text: "● 与玩家共鸣",
    color: "#ffb8da",
    bg: "linear-gradient(-45deg, #2b1d35, #4a2c53, #1f1b2e, #361f3d)",
  },
  {
    text: "● 游戏一处掌控",
    color: "#A5B4FC",
    bg: "linear-gradient(-45deg, #0f172a, #1e3a8a, #0c4a6e, #172554)",
  },
  {
    text: "● 成就进度同步",
    color: "#FDE68A",
    bg: "linear-gradient(-45deg, #2a1508, #7c2d12, #431407, #9a3412)",
  },
  {
    text: "● 探索你的世界",
    color: "#A7F3D0",
    bg: "linear-gradient(-45deg, #022c22, #064e3b, #020617, #065f46)",
  },
];

export function IntroPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 设置定时器，每 4 秒切换一次状态
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % THEMES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Flex direction="column" pos="relative" h="100vh" w="100vw" style={{ overflow: "hidden" }}>
      {/* ================= 动态渐变背景层 ================= */}
      {THEMES.map((theme, index) => (
        <Box
          key={index}
          pos="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          style={{
            background: theme.bg,
            backgroundSize: "400% 400%",
            animation: "gradientBG 12s ease infinite",
            opacity: currentIndex === index ? 1 : 0,
            transition: "opacity 1.2s ease-in-out",
            zIndex: 0,
          }}
        />
      ))}

      {/* ================= 上方品牌展示区 ================= */}
      <Center flex={1} p="md" style={{ zIndex: 1, perspective: "1000px" }}>
        <Text
          key={currentIndex} // 触发重新渲染以播放动画
          c={THEMES[currentIndex].color}
          fw={800}
          fz={{ base: 28, md: 40 }}
          style={{
            textShadow: `0 4px 20px ${THEMES[currentIndex].color}60`, // 发光阴影
            // 使用全新的中心展开动画，贝塞尔曲线让展开末尾有轻微的呼吸感
            animation: "expandFromCenter 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
            transformOrigin: "center center", // 确保从正中心开始变换
            whiteSpace: "nowrap", // 防止文字在展开过程中意外换行
          }}
        >
          {THEMES[currentIndex].text}
        </Text>
      </Center>

      {/* ================= 下方登录面板区域 ================= */}
      <Box
        className="login-panel"
        w={{ base: "100%", sm: 420 }}
        bg="#1D1F27"
        p={{ base: "xl", sm: 40 }}
        pb={{ base: 50, sm: 40 }}
        mx="auto"
        style={{ zIndex: 1 }}
      >
        <Stack gap="lg">
          <UnstyledButton
            bg="#B0C4FF"
            w="100%"
            py="sm"
            style={{ borderRadius: "100px", textAlign: "center", transition: "transform 0.1s" }}
            onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.98)")}
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <Group justify="center" gap="sm">
              <IconUserKey size={24} color="#111B3D" stroke={1.5} />
              <Text fw={600} c="#5B6D9A" fz="sm" lh={1.2}>
                以通行密钥登陆
              </Text>
            </Group>
          </UnstyledButton>

          <Divider
            my="xs"
            label={
              <Text c="#5E6373" fz={12}>
                或其他方式
              </Text>
            }
            labelPosition="center"
            color="#2A2D36"
          />

          <Group grow gap="md">
            <UnstyledButton
              bg="#313440"
              py="sm"
              style={{ borderRadius: "16px", transition: "background 0.2s" }}
              className="hover-bg"
            >
              <Center>
                <IconBrandQq size={24} color="#fff" stroke={1.5} />
              </Center>
            </UnstyledButton>
            <UnstyledButton
              bg="#313440"
              py="sm"
              style={{ borderRadius: "16px", transition: "background 0.2s" }}
              className="hover-bg"
            >
              <Center>
                <IconBrandGoogle size={24} color="#4285F4" stroke={1.5} />
              </Center>
            </UnstyledButton>
            <UnstyledButton
              bg="#313440"
              py="sm"
              style={{ borderRadius: "16px", transition: "background 0.2s" }}
              className="hover-bg"
            >
              <Center>
                <IconBrandApple size={24} color="#9EA3B0" stroke={1.5} />
              </Center>
            </UnstyledButton>
          </Group>

          <UnstyledButton
            bg="#313440"
            w="100%"
            py="md"
            style={{ borderRadius: "100px", transition: "background 0.2s" }}
            className="hover-bg"
          >
            <Group justify="center" gap="sm">
              <IconLogin size={20} color="#D1D5E0" stroke={2} />
              <Text fw={600} c="#D1D5E0" fz="sm">
                账号密码登录
              </Text>
            </Group>
          </UnstyledButton>

          <Center mt="md">
            <Text fz="sm" c="#7A7E8D" fw={500}>
              没有账号？
              <Text
                component="span"
                c="#fff"
                fw={600}
                style={{ cursor: "pointer", marginLeft: "6px" }}
                className="hover-text"
              >
                立即注册
              </Text>
            </Text>
          </Center>
        </Stack>
      </Box>

      {/* 注入全局 CSS 动画 */}
      <style>{`
        /* 动态背景动画 */
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* 核心修改：中心展开动画 */
        @keyframes expandFromCenter {
          0% { 
            opacity: 0; 
            transform: scale(0.6); /* 初始缩小 */
            letter-spacing: -4px;  /* 初始字距收缩，甚至挤在一起 */
            filter: blur(4px);     /* 轻微模糊，增加电影感 */
          }
          100% { 
            opacity: 1; 
            transform: scale(1);   /* 还原大小 */
            letter-spacing: 2px;   /* 舒展到目标字距 */
            filter: blur(0);       /* 清晰 */
          }
        }

        @media (hover: hover) {
          .hover-bg:hover { background-color: #3F4353 !important; }
          .hover-text:hover { text-decoration: underline; }
        }

        .login-panel {
          border-top-left-radius: 28px;
          border-top-right-radius: 28px;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          box-shadow: 0 -4px 20px rgba(0,0,0,0.2);
          margin-bottom: 0;
        }

        @media (min-width: 768px) {
          .login-panel {
            border-radius: 24px;
            box-shadow: 0 16px 48px rgba(0,0,0,0.4);
            margin-bottom: 8vh;
          }
        }
      `}</style>
    </Flex>
  );
}
