Khi khởi tạo git(git init ), git sẽ tạo 1 folder .git. Mọi người cho biết tác dụng của folder này là gì?
Giả sử, nếu xoá hoặc di chuyển folder này sang 1 thư mục khác thì điều gì sẽ xảy ra. Giải thích tại sao?
	
	-Tác dụng của file này như một đường dẫn(con trỏ) từ máy cá nhân đến repo trên github
	-Nếu xóa hoặc chuyển  folder này sang 1 thư mục hoặc folder khác thì khi Git Bash Here ở folder ko có .git , git sẽ ko biết phải dẫn file này đi đâu cả 
	 khi git add . nó sẽ hiện : fatal: not a git repository (or any of the parent directories): .git ( có thể  hiểu : là không có bố mẹ dẫn đường nên là ko biết đi đâu cả) 
	- Vì nó không có .git như con trỏ giúp   kết nối giữa máy cá nhân và github 



	