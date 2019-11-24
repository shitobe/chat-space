# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

# DB設計
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :groups_users
- hss_many :groups, throught: :groups_users
- has_many :chats

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :groups_users
- hss_many :users, throught: :groups_users
- has_many :chats

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## chatsテーブル

|Column|Type|Options|
|------|----|-------|
|comment|string|null: false|
|image|string|null: true|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
