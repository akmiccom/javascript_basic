from collections import Counter
import json
import os

def process_json(file_name, key):
    """JSONファイルを読み込み、重複をカウント、削除する"""
    base_dir = os.path.dirname(os.path.abspath(__file__))  # スクリプトのディレクトリを取得
    file_path = os.path.join(base_dir, file_name)  # 絶対パスを作成

    with open(file_path, "r", encoding="utf-8") as file:
        data = json.load(file)

    key_counts = Counter(item[key] for item in data)
    duplicates = {k: v for k, v in key_counts.items() if v > 1}
    unique_data = list({item[key]: item for item in reversed(data)}.values())


    print(f"\n📌 {file_name} の解析結果")
    print(f"元のデータ数: {len(data)}")
    print(f"ユニークなデータ数: {len(unique_data)}")
    print(f"重複の合計件数: {sum(duplicates.values()) - len(duplicates)}")
    
    if duplicates:
        print("重複しているデータ一覧:")
        for k, v in duplicates.items():
            print(f"  {k}: {v}回")

    # new_file_name = file_name.replace(".json", ".json")
    with open(file_name, "w", encoding="utf-8") as file:
        json.dump(unique_data, file, indent=4, ensure_ascii=False)

    print(f"✅ 重複を削除したデータを '{file_name}' に保存しました！")


def check_consistency(file_name, key):
    """指定したキーの値の一貫性をチェック"""
    with open(file_name, "r", encoding="utf-8") as file:
        data = json.load(file)

    # 各値の出現回数をカウント
    value_counts = Counter(item[key] for item in data)

    print(f"\n📌 {file_name} の '{key}' チェック")
    for value, count in value_counts.items():
        print(f"  {value}: {count}回")

# 空港データのチェック
check_consistency("airports.json", "country")
check_consistency("airports.json", "area")

# 航空会社データのチェック
check_consistency("airlines.json", "country")

process_json("airports.json", "code")

process_json("airlines.json", "code")
