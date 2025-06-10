import os
import re

def fix_html_entities(content):
    """修复HTML实体编码乱码"""
    # 修复常见的HTML实体编码
    replacements = {
        '&#x20;': '',  # 空格
        '&#xA;': '\n',  # 换行
        '&#x540D;': '名',  # 名
        '&#x5C0F;': '小',  # 小
        '&amp;': '&',  # &符号
        '&lt;': '<',   # <符号
        '&gt;': '>',   # >符号
        '&quot;': '"', # 引号
        '&apos;': "'", # 单引号
    }
    
    for old, new in replacements.items():
        content = content.replace(old, new)
    
    # 修复其他十六进制编码的中文字符
    def replace_hex_entity(match):
        hex_code = match.group(1)
        try:
            char_code = int(hex_code, 16)
            return chr(char_code)
        except:
            return match.group(0)
    
    content = re.sub(r'&#x([0-9a-fA-F]+);', replace_hex_entity, content)
    
    return content

def process_file(file_path):
    """处理单个文件"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        fixed_content = fix_html_entities(content)
        
        if original_content != fixed_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            print(f"已修复: {file_path}")
            return True
        else:
            print(f"无需修复: {file_path}")
            return False
    except Exception as e:
        print(f"处理文件 {file_path} 时出错: {e}")
        return False

def main():
    """主函数"""
    docs_dir = r"c:\XCSQWEB\XCSQME.WEB\docs"
    fixed_count = 0
    total_count = 0
    
    # 遍历所有.md文件
    for root, dirs, files in os.walk(docs_dir):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                total_count += 1
                if process_file(file_path):
                    fixed_count += 1
    
    print(f"\n处理完成！")
    print(f"总共检查了 {total_count} 个文件")
    print(f"修复了 {fixed_count} 个文件")

if __name__ == "__main__":
    main()