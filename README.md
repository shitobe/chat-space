# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation
# DB設計
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false,|
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
|id|integer|null: false,|
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
|id|integer|null: false,|
|comment|string|null: false|
|image|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
