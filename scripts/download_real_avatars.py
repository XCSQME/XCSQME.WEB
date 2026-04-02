import requests
import os

mapping = """
gf_BBRIS_400x400.webp|加密大漂亮
photo_2023-03-09_20-36-40.webp|币圈所长
MdgYNqsK_400x400.webp|比特币峰哥
tJ5p0s1y_400x400.webp|陈哥
43b73da98d116f2a9ffda5ba5c99b42.webp|三马哥
sM-AQdPt_400x400.webp|帕尔 | 無極Infinity☯️
Unojeq6v_400x400.webp|周大侠丨無極Infinity☯️
umxQYtqN_400x400.webp|烟鬼𝕐𝔸ℕ-𝔾𝕌𝕀 🅧 無極☯️
uyDXNr0V_400x400.webp|颜驰
photo_2024-08-22_16-38-42.webp|舒琴
68c9f21b12400ef9403f41336d639dc.webp|苏禾
fPfWTHzr_400x400.webp|加密庞克
微信截图_20240905204249.webp|比特币军长
photo_2022-09-21_00-32-15.webp|大镖客
744c6abd33cd707693cbb611c20e922.webp|交易员三木
b358dcb5e3901b887586ed04063ac1e.webp|Shu-Crypto
2sCvAcOH_400x400.webp|熬鹰资本 🇨🇳
8nYRtT6q_400x400.webp|凉兮大元帅
a0f80254d72abb314fa113c3c03f577.webp|白丁
979fb5a932382b4dc3c1134264e62fd.webp|皮皮虾INFP
1YnfMkEr_400x400.webp|提阿非罗
WechatIMG401.webp|廖少冰
WX20250727-155327@2x.webp|東記炒幣
go1feHj5_400x400.webp|科幣託 crypto
f12671cce32a699b1ace0672a32a490.webp|交易员张张子
微信图片_20240830111652.webp|打不死的交易员
62088151ly8fyfevxgf70j208m08m76w.webp|波浪理论柳玉东
微信图片_20240903112340.webp|刘教链
6126be056dd337eddc02882877dcd5d.webp|洪七公
1qdYCteR_400x400.webp|cakebaba
8vCozkM2_400x400.webp|LaserCat镭射猫
bba52b5aacf19498efa5eafc8785869.webp|0xSun孙嘉良
Cn7tNXs3_400x400.webp|JAMES猴哥
EJa9JdRF_400x400.webp|Martin_sen
f5ddafe6be7ca452cac7af54c13e552.webp|大宇
Pln6jtx-_400x400.webp|CryptoD|1000XGEM
RT4I2EGx_400x400.webp|Mason
OpKdr4YU_400x400.webp|头部玩家
3g34XiB9_400x400.webp|江屿投研
bwi0V3n3_400x400.webp|凯文空投
ce419f4f3d6f0b084a69be887d23255.webp|王小楼
9tB-UuzO_400x400.webp|P总财富圈
pY_lsC3D_400x400.webp|清水哥
8YdkXcPM_400x400.webp|DD社区
RTHCMdVB_400x400.webp|斗兽场
yHbleiLY_400x400.webp|WWG财富集团
Ggj0Qing_400x400.webp|raizelXbt
ymeGRGhA_400x400.webp|Vivian
eqHJAqjz_400x400.webp|Jayson Casper
JqsL-jfP_400x400.webp|Chroma
cDVrX4Gs_400x400.webp|The Lab🧪
XYO-OMhw_400x400.webp|JV Trades
2803a333de69784c7be1da3278628a98826afa13c95b73f5a7c9c57b057f332f.webp|ScalpX
TIADIvFp_400x400.webp|rektproof
1uSKSJ5a_400x400.webp|Magicians HUB🪄
9mGubd4v_400x400.webp|Dr Profit利润医生
微信图片_20240413163454.webp|Rose玫瑰军团
微信图片_20240413170453.webp|Inner circle
photo_2022-08-28_12-08-30.webp|Yo Crypto
photo_2021-10-03_21-45-42.webp|俄罗斯罗盘FRI
photo_2021-11-21_22-55-45.webp|币安杀手BN killers
photo_2021-11-21_23-12-16.webp|BTC子弹btc bullets
photo_2021-06-09_12-32-55.webp|华尔街女王Wallstreet Queen
"""

base_url = "https://www.coincia.top/static/image/头像/"
target_dir = "/root/xcsq-web/assets/avatars/"

if not os.path.exists(target_dir):
    os.makedirs(target_dir)

for line in mapping.strip().split('\n'):
    parts = line.split('|')
    filename = parts[0]
    name = '|'.join(parts[1:])
    url = base_url + filename
    save_path = os.path.join(target_dir, filename)
    print(f"Downloading {filename}...")
    try:
        r = requests.get(url)
        with open(save_path, 'wb') as f:
            f.write(r.content)
    except:
        print(f"Failed to download {filename}")
