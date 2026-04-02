#!/usr/bin/env python3
"""
KOL Twitter Avatar Collector
收集 KOL Twitter 头像并保存到指定目录
"""

import os
import json
import time
import requests
from pathlib import Path

# KOL 数据 - Twitter 用户名到本地名称的映射
KOL_TWITTER_MAP = {
    # 华语二级市场
    "Alertの会所": None,  # 需要搜索
    "Ye.koi": "yekoi_crypto",
    "风寻": None,
    "颜驰": "yanchi_trader",
    "提阿非罗": "tiefeitai",
    "比特币飞扬": "btc_feiyang",
    "比特币陈哥": "chenge_btc",
    "比特币峰哥": "btc_fengge",
    "大镖客": None,
    "蛋糕爸爸": None,
    "必到哥": None,
    "币圈所长": "suozhang_btc",
    "比特币军长": None,
    "加密大漂亮": None,
    "LILI王-MIA": None,
    "Shu-Crypto": "shucrypto",
    "三马哥": None,
    "舒琴": None,
    "逍遥xtony": None,
    "洪七公": "hongqigong_btc",
    "黄有梁": None,
    "打不死的交易员": None,
    "帕尔-无极": None,
    "币圈Kama": "kamabtc",
    "加密密克": None,
    "诗魂": None,
    "三木交易员": None,
    
    # 国外二级市场
    "WWG交易员频道": "wwg_trading",
    "Vivian交易团队": "vivian_trading",
    "Jayson Casper": "jaysoncasper",
    "Trading Arena斗兽场": "tradingarena",
    "Unity Academy": "unityacademy",
    "ChartChampions": "chartchampions",
    "The Lab": "thelabtrading",
    "Illusion X社区": None,
    "Chroma社区": None,
    "The Haven社区": None,
    "CryptoWizards": None,
    "AlphaTraders": None,
    "SignalMasters": None,
    "TradeLegends": None,
    "CryptoElite": None,
    
    # 一级链上
    "0xsun": "0xsun",
    "James": None,
    "头部玩家": None,
    "P总": "pzong_eth",
    "万岁": None,
    "1000X GEM Crypto D": None,
    "链智监控信号": None,
    "清水哥": None,
    
    # 辅助性功能频道 - 无需头像
    "星辰AI监控": None,
    "吴说区块链": "wushuo_blockchain",
    "华尔街见闻": "wallstreetcn",
    "凉兮大元帅": "liangxi_btc",
    "柳玉东波浪理论": None,
    "反指组": None,
    "大盘行情速递": None,
    "博主胜率统计频道": None,
}

def create_avatar_directory():
    """创建头像存储目录"""
    avatar_dir = Path("/root/xcsq-web/assets/avatars")
    avatar_dir.mkdir(parents=True, exist_ok=True)
    return avatar_dir

def download_placeholder_avatar(name, avatar_dir):
    """下载占位头像"""
    # 使用 ui-avatars.com 生成占位头像
    encoded_name = requests.utils.quote(name)
    url = f"https://ui-avatars.com/api/?name={encoded_name}&background=random&color=fff&size=200&font-size=0.4&bold=true"
    
    try:
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            # 保存为 PNG
            safe_name = "".join(c for c in name if c.isalnum() or c in (' ', '-', '_')).rstrip()
            safe_name = safe_name.replace(' ', '_')
            file_path = avatar_dir / f"{safe_name}.png"
            with open(file_path, 'wb') as f:
                f.write(response.content)
            print(f"✅ 已生成占位头像: {name}")
            return True
    except Exception as e:
        print(f"❌ 生成失败 {name}: {e}")
    
    return False

def download_twitter_avatar(twitter_handle, name, avatar_dir):
    """下载 Twitter 头像 (需要 Twitter API 或第三方服务)"""
    # 这里可以使用 nitter.net 或其他服务
    # 由于是示例，暂时使用占位头像
    return download_placeholder_avatar(name, avatar_dir)

def main():
    """主函数"""
    print("🎨 KOL 头像收集脚本")
    print("=" * 50)
    
    avatar_dir = create_avatar_directory()
    print(f"📁 头像存储目录: {avatar_dir}")
    print()
    
    success_count = 0
    fail_count = 0
    
    for name, twitter_handle in KOL_TWITTER_MAP.items():
        # 跳过 None (功能频道等不需要头像)
        if twitter_handle is None:
            # 生成占位头像
            if download_placeholder_avatar(name, avatar_dir):
                success_count += 1
            else:
                fail_count += 1
        else:
            # 尝试下载 Twitter 头像
            if download_twitter_avatar(twitter_handle, name, avatar_dir):
                success_count += 1
            else:
                fail_count += 1
        
        # 避免请求过快
        time.sleep(0.5)
    
    print()
    print("=" * 50)
    print(f"✅ 成功: {success_count}")
    print(f"❌ 失败: {fail_count}")
    print(f"📁 头像保存位置: {avatar_dir}")

if __name__ == "__main__":
    main()
