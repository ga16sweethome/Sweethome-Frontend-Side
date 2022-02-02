# Manual Book

---

## Cara menggunakan package ini

### Clone branch `development`

```
git clone -b development <remote url>

```

**clone menggunakan remote https :**

```
git clone -b development https://gitlab.com/binarxglints_batch16/finalproject/sweet-home/fe_sweethome.git
```

**clone menggunakan remote ssh :**

```
git clone -b development git@gitlab.com:binarxglints_batch16/finalproject/sweet-home/fe_sweethome.git
```

### Install

package ini menggunakan **`yarn`** sebagai package manager

```
yarn install
```

<br/>
<br/>

## Branching

### Master/Main

Branch utama dalam project kita.

### Development

Digunakan untuk menampung fitur-fitur yang sudah di kerjakan di dalam branch **Feature**

### Feature

Digunakan untuk membuat fitur-fitur pada project kita dan jika sudah fix, akan di merge di branch development.

### Release

Digunakan untuk production, biasanya digunakan ketika sudah selesai di branch develop.

### Hotfix

Digunakan untuk melakukan pembenahan bug pada saat sudah rilis.

### Membuat `feature` baru

buat branch baru diawali dengan `feature/`

```
git checkout -b feature/featureName
```

### Merge branch `feature` ke branch `development`

pindah ke branch `development` lalu merge branch `feature` yang diinginkan

```
git checkout development
git merge feature/featureName
```

### Berbagi components dengan feature lain

pastikan components yang ingin digunakan telah di push terlebih dahulu dan di merge ke branch development

```
git checkout development
git pull origin development
git checkout feature/featureSekarang
git merge development
```
